import dotenv from "dotenv"
import { GoogleGenerativeAI } from "@google/generative-ai"
import * as message from "../status/status.js";

dotenv.config()

const genIA = new GoogleGenerativeAI(process.env.API_KEY)

export async function InitChat(userReq, contentType){
    console.log(userReq);
    try {
        
        if(String(contentType).toLocaleLowerCase() == 'application/json'){
            if(
                userReq.question == undefined || userReq.question == '' || userReq.question == null
            ){
                return message.ERROR_REQUIRED_FIELDS
            }else{
                
                const model = genIA.getGenerativeModel({ model: "gemini-2.5-flash" })
                const result = await model.generateContent(userReq.question)

                if(result){
                    return {
                        message: message.SUCCES_QUESTION_SENT.message,
                        status_code: message.SUCCES_QUESTION_SENT.status_code,
                        IA_response: result.response.text()
                    }
                }else{
                    return message.ERROR_INVALID_QUESTION
                }
            }
        }else{
            return message.ERROR_CONTENT_TYPE
        }
        
    } catch (error) {
        console.log(error);
    }
}
