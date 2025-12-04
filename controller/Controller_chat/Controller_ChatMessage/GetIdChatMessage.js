/*********************************************************
 * Autor: Felipe Vieira
 * Date: 23/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para 
 *                            GET ID RELACIONAMENTO MENSAGEM-CHAT
 ********************************************************/

import * as message from '../../../config/status/status.js'
import { getIdSQLChatMessage } from '../../../model/ChatDAO/ChatMessageDAO/getIdSQLChatMessage.js'


export const getIdChatMessage = async function (id_chat) {
    try {
        
        if (id_chat == undefined || id_chat == null || id_chat == '' || isNaN(id_chat)) {
            return message.ERROR_REQUIRED_FIELDS
        } else {


            let resultChatMessage = await getIdSQLChatMessage(id_chat)
            console.log(resultChatMessage);
            if (resultChatMessage) {
                if (resultChatMessage.length > 0) {

                    return resultChatMessage
                } else {
                    return message.ERROR_NOT_FOUND
                }
                
            }else{
                return message.ERROR_INTERNAL_SERVER_MODEL
            }
        }

    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}