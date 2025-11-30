/*********************************************************
 * Autor: Felipe Vieira
 * Date: 21/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para 
 *                            GET ID da mensagem
 ********************************************************/

import * as message from '../../config/status/status.js'
import { getIdSQLMessage } from "../../model/MessageDAO/getIdSQLMessage.js";
import { getIdChat } from "../../controller/Controller_chat/GetIdChat.js";
import { selectIDUser } from "../../controller/Controller_user/searchIdUser.js";

export const getIdMessage = async function (idGet){
    try {
        
        let arrayMessage = []
        let dadosMessage = {}
        if(idGet == null || idGet == '' || idGet == undefined || isNaN(idGet))
        {
            return message.ERROR_REQUIRED_FIELDS
        }else{

            let resultGetId = await getIdSQLMessage(idGet)
            
            if(resultGetId != false || typeof (resultGetId) == 'object'){
                if(resultGetId.length > 0){
                    dadosMessage.status_code = message.SUCCES_SEARCH_ITEM.status_code
                    dadosMessage.message = message.SUCCES_SEARCH_ITEM.message
                    dadosMessage.data = resultGetId

                    for(let item of resultGetId){
                        let dadosChat = await getIdChat(item.id_chat)
                        item.chat = dadosChat.data
                        delete item.id_chat

                        let dadosUser = await selectIDUser(item.id_user)
                       console.log(dadosUser);
                       
                        
                        item.user = {
                            id_usuario: dadosUser.usuario[0].id_user,
                            usuario: dadosUser.usuario[0].nome_user,
                            email: dadosUser.usuario[0].email,
                            tipo_usuario: dadosUser.usuario[0].data_tipo[0].tipo
                        }
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

        }
    } catch (error) {
        console.log(error);
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}