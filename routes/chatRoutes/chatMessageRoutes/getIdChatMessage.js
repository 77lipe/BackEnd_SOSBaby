/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para GET ID DO RELATÓRIO DE MENSAGENS DO CHAT
 ********************************************************/

import {Router} from "express";
import cors from 'cors'

const routerIdChatMessage = Router()

import { getIdChatMessage } from "../../../controller/Controller_chat/Controller_ChatMessage/GetIdChatMessage.js";

routerIdChatMessage.get('/chat/message/:id', cors(), async (req, res) => {
    let id = req.params.id
    let resultIdChatMessage = await getIdChatMessage(id)

    return res.status(resultIdChatMessage.status_code).json(resultIdChatMessage)
})

export default routerIdChatMessage
