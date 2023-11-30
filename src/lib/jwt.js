import jwt from 'jsonwebtoken'
import { decode } from 'next-auth/jwt';

// signing jwt
export function signJwtToken(payload, options = {}) {
    const secret = process.env.JWT_SECRET;
    const token = jwt.sign(payload, secret, options);
    return token;
}


// verifying jwt
export async function verifyJwtToken(token) {
    try {
        const decoded = await decode({
            token: sessionToken,
            secre: process.env.JWT_SECRET
        })
        return decoded;
    } catch (error) {
        console.error(error);
        return null;
    }
}
