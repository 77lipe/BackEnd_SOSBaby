import dotenv from "dotenv"
import readline from 'readline'
import { GoogleGenerativeAI } from "@google/generative-ai"
import * as message from "../status/status.js";

dotenv.config()

const genIA = new GoogleGenerativeAI(process.env.API_KEY)
const model = genIA.getGenerativeModel({ model: "gemini-2.5-flash" })

const chatHistory = new Map()

export async function initChatMulti(userReq, contentType, userId){
    try {
        
        if(String(contentType).toLocaleLowerCase() == 'application/json'){
            if(
                userReq.question == undefined || userReq.question == '' || userReq.question == null
            ){
                return message.ERROR_REQUIRED_FIELDS
            }else{

                const question = userReq?.question?.trim()

                if(question){
                    console.log("Pergunta Recebida:", question);    
                    const history = chatHistory.get(userId) || []
                    //console.log(history);

                    if(history){
                        const chat = model.startChat({
                            history,
                            generationConfig: {maxOutputTokens: 4000 }
                        })
    
                        if(chat){
                            const result = await chat.sendMessage(question)
                            if(result){
                                const answer = result.response.text()
    
                                if(answer == undefined || answer == '' || answer == null){
                                    return {
                                        message: message.ERROR_INVALID_QUESTION.message,
                                        status_code: message.ERROR_INVALID_QUESTION.status_code,
                                        response: result
                                    }
    
                                }else{
                                    const updateHistory = [
                                        {remetente: "user", pergunta: question},
                                        {remetente: "IA", resposta: answer }
                                    ]
        
                                    chatHistory.set(userId, updateHistory)
                                    return{
                                        message: message.SUCCES_QUESTION_SENT.message,
                                        status_code: message.SUCCES_QUESTION_SENT.status_code,
                                        IA_response: answer,
                                        history: updateHistory
                                    }
                                } 
                            }
                            
                        }
                    }
                    
                }
            }
        }else{
            return message.ERROR_CONTENT_TYPE
        }
    } catch (error) {
        console.log(error)
        return message.ERROR_INVALID_QUESTION    
    }
}

