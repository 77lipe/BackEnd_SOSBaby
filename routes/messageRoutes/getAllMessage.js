/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para GET ALL MESSAGE
 ********************************************************/

import {Router} from "express"
import cors from 'cors'
const routerAllMessage = Router()

import { getAllMessage } from "../../controller/Controller_message/getAllMessage.js";

routerAllMessage.get('/messages', cors(), async(req, res) => {
    
    let resultAllMessage = await getAllMessage()
    return res.status(resultAllMessage.status_code).json(resultAllMessage)
})

export default routerAllMessage