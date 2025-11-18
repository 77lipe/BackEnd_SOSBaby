/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para POST CHAT
 ********************************************************/

import {Router} from "express"
import bodyParser from "body-parser"
const routerInsertChat = Router()
const bodyJsonParser = bodyParser.json()

import { insertChat } from "../../controller/Controller_chat/InsertChat.js";

routerInsertChat.post('/chat/cadastro', bodyJsonParser , async(req, res) => {
    let contentType = req.headers['content-type']
    let dadosChat = req.body

    let resultInsertChat = await insertChat(dadosChat, contentType)
    return res.status(resultInsertChat.status_code).json(resultInsertChat)
})

export default routerInsertChat