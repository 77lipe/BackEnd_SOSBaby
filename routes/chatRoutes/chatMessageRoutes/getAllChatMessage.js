/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para GET ALL DO RELATÓRIO DE MENSAGENS DO CHAT
 ********************************************************/

import {Router} from "express"
import cors from 'cors'
const routerAllChatMessage = Router()

import { getAllChatMessage } from "../../../controller/Controller_chat/Controller_ChatMessage/GetAllChatMessage.js"

routerAllChatMessage.get('/chats/messages', cors(), async(req, res) => {
    let resultAllChatMessage = await getAllChatMessage()
    return res.status(resultAllChatMessage.status_code).json(resultAllChatMessage)
})

export default routerAllChatMessage
