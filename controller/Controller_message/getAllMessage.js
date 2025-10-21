/*********************************************************
 * Autor: Felipe Vieira
 * Date: 21/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para 
 *                            GET ALL da mensagem
 ********************************************************/

import * as message from '../../config/status/status.js'
import { getAllSQLMessage } from "../../model/MessageDAO/getAllSQLMessage.js";
import { getIdChat } from "../../controller/Controller_chat/GetIdChat.js";
import { selectIDUser } from "../../controller/Controller_user/searchIdUser.js";

export const getAllMessage = async function (){
    try {
        
        let arrayMessage = []
        let dadosMessage = {}

        let resultGetAll = await getAllSQLMessage()
        if(resultGetAll != false || typeof (resultGetAll) == 'object'){
            if(resultGetAll.length > 0){
                dadosMessage.status_code = message.SUCCES_SEARCH_ITEM.status_code
                dadosMessage.message = message.SUCCES_SEARCH_ITEM.message
                dadosMessage.data = resultGetAll

                for(let item of resultGetAll){
                    let dadosChat = await getIdChat(item.id_chat)
                    item.chat = dadosChat.data
                    delete item.id_chat

                    let dadosUser = await selectIDUser(item.id_user)
                    item.user = dadosUser.data
                    delete item.id_user

                    arrayMessage.push(item)
                    dadosMessage.data = arrayMessage
                }

                return dadosMessage
            }else{
                return message.ERROR_NOT_FOUND
            }
        
        }else{
            return message.ERROR_INTERNAL_SERVER_MODEL
        }

    } catch (error) {
        console.log(error);
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}