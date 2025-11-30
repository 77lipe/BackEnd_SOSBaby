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
import { getIdSQLChat } from '../../../model/ChatDAO/getIdSQLChat.js'

import { getIdMessage } from "../../Controller_message/getIdMessage.js"

export const getIdChatMessage = async function (id) {
    try {
        
        if (id == undefined || id == null || id == '' || isNaN(id)) {
            return message.ERROR_REQUIRED_FIELDS
        } else {

            let ArrayDataChatMessage = []
            let ChatMessageDataJson = {}

            let resultChatMessage = await getIdSQLChatMessage(id)
            if (resultChatMessage != false) {
                if (resultChatMessage.length > 0) {
                    ChatMessageDataJson.status_code = message.SUCCES_SEARCH_ITEM.status_code
                    ChatMessageDataJson.message = message.SUCCES_SEARCH_ITEM.message
                    ChatMessageDataJson.chat_message = resultChatMessage

                    

                    for(let item of resultChatMessage){
                        let dadoChat = await getIdSQLChat(item.id_chat)
                        //console.log("Dado chat:", dadoChat);
                        
                        item.chat = dadoChat[0].nome_chat
                        delete item.id_chat

                        let dadoMessage = await getIdMessage(item.id_mensagem)
                        //console.log("DadoMESSAGE:", dadoMessage);
                        
                        //console.log(dadoMessage);
                        
                        item.mensagem_enviada = {
                            mensagem: dadoMessage.data[0].conteudo,
                            hora_envio: dadoMessage.data[0].created_at,
                            usuario: dadoMessage.data[0].user.usuario
                        }
                        delete item.id_mensagem

                        ArrayDataChatMessage.push(item)
                    }

                    ChatMessageDataJson.chat_message = ArrayDataChatMessage
                    
                    return ChatMessageDataJson

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