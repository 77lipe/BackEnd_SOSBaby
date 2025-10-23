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
import { getIdSQLChat } from "../../../model/ChatDAO/getIdSQLChat.js"
import { getIdSQLMessage } from "../../../model/MessageDAO/getIdSQLMessage.js"

export const getAllChatMessage = async function () {
    try {
        
        let ArrayChatMessage = []
        let ChatMessageDataJson = {}

        let resultChatMessage = await getAllSQLChatMessage()
        if (resultChatMessage != false) {
            if (resultChatMessage.length > 0) {
                ChatMessageDataJson.message = message.SUCCES_SEARCH_ITEM
                ChatMessageDataJson.items = resultChatMessage.length
                ChatMessageDataJson.chat_messages = resultChatMessage

                for (let item of resultChatMessage) {
                    let dadoChat = await getIdSQLChat(item.id_chat)
                    item.chat = dadoChat
                    delete item.id_chat

                    let dadoMessage = await getIdSQLMessage(item.id_mensagem)
                    item.message = dadoMessage
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