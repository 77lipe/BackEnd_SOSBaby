import dotenv from "dotenv"
import { GoogleGenerativeAI } from "@google/generative-ai"

dotenv.config()

const genIA = new GoogleGenerativeAI(process.env.API_KEY)

export async function InitChat(userReq){
    try {
        
        const model = genIA.getGenerativeModel({ model: "gemini-pro "})
        const result = await model.generateContent(userReq)

        return result.response.text()
    } catch (error) {
        console.log(error);
    }
}
