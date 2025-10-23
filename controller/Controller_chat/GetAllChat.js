/*********************************************************
 * Autor: Felipe Vieira
 * Date: 21/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para 
 *                            GET ALL do chat
 ********************************************************/

import * as message from '../../config/status/status.js'
import { getAllSQLChat } from '../../model/ChatDAO/getAllSQLChat.js'

export const getAllChat = async function(){
    try {
        
        let resultAll = await getAllSQLChat()
        if(resultAll != false || typeof(resultAll) == 'object'){
            if(resultAll.length > 0){
                return{
                    ...message.SUCCES_SEARCH_ITEM,
                    items: resultAll.length,
                    data: resultAll
                }
            }else{
                return message.ERROR_NOT_FOUND
            }    
        }else{
            return message.ERROR_INTERNAL_SERVER_MODEL
        }

    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}