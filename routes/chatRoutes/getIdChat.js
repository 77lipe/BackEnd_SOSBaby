/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para GET ID CHAT
 ********************************************************/

import {Router} from "express";
import cors from 'cors'
const routerIdChat = Router()

import { getIdChat } from "../../controller/Controller_chat/GetIdChat.js";

routerIdChat.get('/chat/:id', cors(), async (req, res) => {
    let id = req.params.id
    let resultIdChat = await getIdChat(id)

    return res.status(resultIdChat.status_code).json(resultIdChat)
})

export default routerIdChat