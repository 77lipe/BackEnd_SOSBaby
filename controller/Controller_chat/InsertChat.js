/*********************************************************
 * Autor: Felipe Vieira
 * Date: 21/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para 
 *                            INSERT do chat
 ********************************************************/

import * as message from '../../config/status/status.js'
import { postSQLChat } from '../../model/ChatDAO/postSQLChat.js'
import {getIdSQLChat} from '../../model/ChatDAO/getIdSQLChat.js'

export const insertChat = async function(dadosChat, contentType){
    try {
        
        if(String(contentType).toLocaleLowerCase() == 'application/json'){
            if(
                dadosChat.user1_id == undefined || dadosChat.user1_id == null || dadosChat.user1_id == '' || isNaN(dadosChat.user1_id) ||
                dadosChat.user2_id == undefined || dadosChat.user2_id == null || dadosChat.user2_id == '' || isNaN(dadosChat.user2_id)
            ){
                return message.ERROR_REQUIRED_FIELDS
            }else{

                console.log(dadosChat)
                let existChat = await getIdSQLChat(dadosChat.id_chat)
                if(existChat){
                    return {
                        message: message.SUCCES_CREATED_ITEM,
                        motivo: console.log("CHAT já existente:"),
                        chat: existChat
                    }

                }else{

                    let resultInsert = await postSQLChat(dadosChat)
                if(resultInsert){
                    return{
                            ...message.SUCCES_CREATED_ITEM,
                            data: resultInsert
                        }
                    }else{
                        return message.ERROR_INTERNAL_SERVER_MODEL
                    }
                }
            }
        }else{
            return message.ERROR_CONTENT_TYPE
        }

    } catch (error) {
        
    }
}