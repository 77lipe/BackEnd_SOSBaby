/*********************************************************
 * Autor: Felipe Vieira
 * Date: 23/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para 
 *                            GET ALL RELACIONAMENTO MENSAGEM-CHAT
 ********************************************************/

import * as message from '../../../config/status/status.js'
import { getAllSQLChatMessage } from '../../../model/ChatDAO/ChatMessageDAO/getAllSQLChatMessage.js'
import { getIdChat } from "../../Controller_chat/GetIdChat.js"
import { getIdMessage } from "../../Controller_message/getIdMessage.js"

export const getAllChatMessage = async function () {
    try {
        
        let ArrayChatMessage = []
        let ChatMessageDataJson = {}

        let resultChatMessage = await getAllSQLChatMessage()
        console.log(resultChatMessage);
        if (resultChatMessage != false) {
            if (resultChatMessage.length > 0) {
                ChatMessageDataJson.message = message.SUCCES_SEARCH_ITEM.message
                ChatMessageDataJson.status_code = message.SUCCES_SEARCH_ITEM.status_code
                ChatMessageDataJson.items = resultChatMessage.length
                ChatMessageDataJson.chat_messages = resultChatMessage

                for (let item of resultChatMessage) {
                    let dadoChat = await getIdChat(item.id_chat)
                    item.id_chat = dadoChat.data[0].id_chat
                    item.chat = dadoChat.data[0].nome_chat


                    let dadoMessage = await getIdMessage(item.id_mensagem)
                    item.mensagem_enviada = {
                        mensagem: dadoMessage.data[0].conteudo,
                        hora_envio: dadoMessage.data[0].created_at,
                        usuario: dadoMessage.data[0].user.usuario
                    }
                    delete item.id_mensagem

                    ArrayChatMessage.push(item)
                }
                ChatMessageDataJson.chat_messages = ArrayChatMessage
                return ChatMessageDataJson
            } else {
                return message.ERROR_NOT_FOUND
            }
        
        }else{
            return message.ERROR_INTERNAL_SERVER_MODEL
        }
        
    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER;
    }
}    