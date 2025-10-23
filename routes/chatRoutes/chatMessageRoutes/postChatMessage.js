/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para POST DO RELATÓRIO DE MENSAGENS DO CHAT
 ********************************************************/

import {Router} from "express"
import bodyParser from "body-parser"

const routerPostChatMessage = Router()
const bodyJsonParser = bodyParser.json()

import { insertChatMessage } from "../../../controller/Controller_chat/Controller_ChatMessage/InsertChatMessage.js"

routerPostChatMessage.post('/chat/message/cadastro', bodyJsonParser , async(req, res) => {
    
    let contentType = req.headers['content-type']
    let dadosChatMessage = req.body

    let resultInsertChatMessage = await insertChatMessage(dadosChatMessage, contentType)
    return res.status(resultInsertChatMessage.status_code).json(resultInsertChatMessage)
})

export default routerPostChatMessage