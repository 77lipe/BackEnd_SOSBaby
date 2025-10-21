/*********************************************************
 * Autor: Felipe Vieira
 * Date: 21/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para 
 *                            GET ID do chat
 ********************************************************/

import * as message from '../../config/status/status.js'
import { getIdSQLChat } from '../../model/ChatDAO/getIdSQLChat.js'

export const getIdChat = async function(idChat){
    try {
        
        if(
            idChat == undefined || idChat == null || idChat == '' || isNaN(idChat)
        ){
            return message.ERROR_REQUIRED_FIELDS
        }else{

            let resultID = await getIdSQLChat(idChat)
            if(resultID != false || typeof(resultID) == 'object'){
                if(resultID.length > 0){
                    return{
                        ...message.SUCCES_SEARCH_ITEM,
                        data: resultID
                    }
                }else{
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