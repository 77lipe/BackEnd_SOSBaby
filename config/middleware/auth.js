
import jwt from "jsonwebtoken"
import * as message from "../status/status.js";

export const authmiddle = (req,res,next) => {
    try {
        const authHeader = req.headers["authorization"]
        const token = authHeader && authHeader.split("")[1]

        if(!token){
            return message.ERROR_INVALID_TOKEN
        }else{
            const decode = jwt.verify(token, process.env.JWT_SECRET)
            req.user = decode

            next()
        }
    } catch (error) {
        console.log(error)
        return message.ERROR_INVALID_TOKEN
    }
}