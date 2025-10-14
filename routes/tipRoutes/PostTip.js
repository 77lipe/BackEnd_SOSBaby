/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para POST DICA
 ********************************************************/

import bodyParser from 'body-parser'
import { Router } from 'express'

const routerInsertTip = Router()
const bodyJsonParser = bodyParser.json()

import { insertDica } from "../../controller/Controller_tip/insertTip.js";

routerInsertTip.post('/tip/cadastro', bodyJsonParser, async (req,res) =>{
    
    let contentType = req.headers['content-type']
    let dataTip = req.body

    let resultInsertTip = await insertDica(dataTip, contentType)

    return res.status(resultInsertTip.status_code).json(resultInsertTip)
})

export default routerInsertTip