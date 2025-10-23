/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para POST MESSAGE
 ********************************************************/

import {Router} from "express"
import bodyParser from "body-parser"
const routerInsertMessage = Router()

const bodyJsonParser = bodyParser.json()

import { insertMessage } from "../../controller/Controller_message/insertMessage.js";

routerInsertMessage.post('/message/send', bodyJsonParser , async(req, res) => {
    
    let contentType = req.headers['content-type']
    let dadosMessage = req.body

    let resultInsertMessage = await insertMessage(dadosMessage, contentType)
    return res.status(resultInsertMessage.status_code).json(resultInsertMessage)
})

export default routerInsertMessage