import db from "@/lib/db";
import bcrypt from "bcrypt";
import User from "@/models/User";


export async function POST(req) {
    try {
        await db.connect()

        const {username, email, password: pass} = await req.json()
        const isExsting = await User.findOne({email})

        if (isExsting) {
            throw new Error("User already exists")
        }

        const hashedPassword = await bcrypt.hash(pass, 10)

        const newUser = await User.create({username, email, password: hashedPassword})
        // exclude password
        //._doc is getting the calues of the user
        const {password, ...user} = newUser._doc

        return new Response(JSON.stringify(user), {status: 201})


    } catch (error) {
        return new Response(JSON.stringify(error.message), {status: 500})
    }
}