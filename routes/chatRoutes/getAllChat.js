/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para GET ALL CHAT
 ********************************************************/

import {Router} from "express";
import cors from 'cors'
const routerAllChat = Router()

import { getAllChat } from "../../controller/Controller_chat/GetAllChat.js";

routerAllChat.get('/chats', cors(), async(req, res) => {
    
    let resultAllChat = await getAllChat()
    return res.status(resultAllChat.status_code).json(resultAllChat)
})

export default routerAllChat