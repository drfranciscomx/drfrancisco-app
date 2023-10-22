import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from "@/models/User";
import bcrypt from "bcrypt";
import { signJwtToken } from "@/lib/jwt";
import db from "@/lib/db";


export const options = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,

        }),
        CredentialsProvider({
            type: 'credentials',
            credentials :{
                email:{
                    label: 'Email',
                    type: 'text',
                    placeholder: 'Enter your user name',
                },
                password:{
                    label:'Password',
                    type: 'password',
                    placeholder: ' Enter your password',
                },
            },
            
            async authorize(credentials, req){
                
                const {email, password} = credentials
                
                await db.connect()
                const user = await User.findOne({email})
                

                if (!user) {
                    throw new Error("Invalid input")
                }

                const comparePass = await bcrypt.compare(password, user.password)

                if (!comparePass) {
                    throw new Error("Invalid input")
                }else {
                    const {password, ...currentUser} = user._doc

                    const accessToken = signJwtToken(currentUser, {expiresIn: "6d"})

                    return {
                        ...currentUser,
                        accessToken
                    }
                }
            }
        }),
    ],
    pages: {
        signIn: "/login"
    },
    callbacks: {
        async jwt({token, user}){
            if (user) {
                token.accessToken = user.accessToken
                token._id = user._id
            }

            return token
        },
        async session({session, token}){
            if (token) {
                session.user._id = token._id
                session.user.accessToken = token.accessToken
            }
            return session
        }
    }
}


