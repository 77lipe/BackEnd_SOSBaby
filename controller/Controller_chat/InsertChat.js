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

export const insertChat = async function(dadosChat, contentType){
    try {
        
        if(String(contentType).toLocaleLowerCase() == 'application/json'){
            if(
                dadosChat.nome_chat == undefined || dadosChat.nome_chat == null || dadosChat.nome_chat == '' || dadosChat.nome_chat.length > 50
            ){
                return message.ERROR_REQUIRED_FIELDS
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
        }else{
            return message.ERROR_CONTENT_TYPE
        }

    } catch (error) {
        
    }
}