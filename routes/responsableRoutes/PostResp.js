/*********************************************************
 * Autor: Isabelly Lima
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para POST RESPONSÁVEL
 ********************************************************/

import cors from 'cors'
import bodyParser from 'body-parser'
import express,{ Router } from 'express'
const routerInsertResponsable = Router()

import {insertResponsable} from "../../controller/Controller_responsable/InsertResp"

const bodyJsonParser = bodyParser.json()

routerInsertResponsable.post('/resp/cadastro', bodyJsonParser, async (req,res) =>{
    
    let contentType = req.headers[content-type]
    let dataResponsable = req.body

    let resultInsertResponsable = await insertResponsable(dataResponsable, contentType)

    return res.status(resultInsertResponsable.status_code).json(resultInsertResponsable)
})

export default routerInsertResponsable

