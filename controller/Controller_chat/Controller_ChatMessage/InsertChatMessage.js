/*********************************************************
 * Autor: Felipe Vieira
 * Date: 23/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para 
 *                            INSERT RELACIONAMENTO MENSAGEM-CHAT
 ********************************************************/

import * as message from '../../../config/status/status.js'
import { postSQLChatMessage } from '../../../model/ChatDAO/ChatMessageDAO/postSQLChatMessage.js'

export const insertChatMessage = async function (chatMessage, contentType) {
    try {
        
        if(String(contentType).toLocaleLowerCase() == 'application/json'){
            if(
                chatMessage.id_chat        == undefined || chatMessage.id_chat      == null || chatMessage.id_chat     == '' || isNaN(chatMessage.id_chat)            ||
                chatMessage.id_mensagem     == undefined || chatMessage.id_mensagem   == null || chatMessage.id_mensagem  == '' || isNaN(chatMessage.id_mensagem)         
            ){
                return message.ERROR_REQUIRED_FIELDS
            }else{

                let resultInsertChatMessage = await postSQLChatMessage(chatMessage)
                if(resultInsertChatMessage){
                    return {
                        ...message.SUCCES_CREATED_ITEM,
                        data: resultInsertChatMessage
                    }
                }else{
                    return message.ERROR_INTERNAL_SERVER
                }
            }    
        }else{
            return message.ERROR_CONTENT_TYPE
        }

    } catch (error) {
        console.log(error);
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}