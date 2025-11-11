

import { generateCallToken } from "./videoCall.js"
import * as message from "../status/status.js"

export async function generativeTokenController(user, dados, contentType){
    try {
        
        if(String(contentType).toLocaleLowerCase() == "application/json"){
            if(
                dados.room == undefined || dados.room == null || dados.room == "" ||
                user       == undefined || user       == null || user       == "" 
            ){
                return message.ERROR_REQUIRED_FIELDS
            }else{

                const identity = {
                    nome_Usuario: user.nome_user,
                    id_Usuario: user.id_user
                }

                const token = generateCallToken(identity, dados.room)
                if (token){
                    return {
                        status_code: message.SUCCES_CREATED_ITEM.status_code,
                        message: message.SUCCES_CREATED_ITEM.message,
                        userData: {
                            id: user.id_user,
                            nome: user.nome_user,
                            tipo: user.id_tipo
                        },
                        token: token
                    }
                }else{
                    return console.log("ERROR: erro ao gerar TOKEN de chamada!!");
                }
                
            }
        }else{
            return message.ERROR_CONTENT_TYPE
        }
    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}