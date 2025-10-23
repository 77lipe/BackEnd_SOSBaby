/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para GET ID MESSAGE
 ********************************************************/

import {Router} from "express";
import cors from 'cors'
const routerIdMessage = Router()

import { getIdMessage } from "../../controller/Controller_message/getIdMessage.js";

routerIdMessage.get('/message/:id', cors(), async (req, res) => {
    
    let id = req.params.id
    let resultIdMessage = await getIdMessage(id)

    return res.status(resultIdMessage.status_code).json(resultIdMessage)
})

export default routerIdMessage