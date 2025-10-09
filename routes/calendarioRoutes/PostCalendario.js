/*********************************************************
 * Autor: Isabelly Lima
 * Date: 09/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para POST CALENDÁRIO
 ********************************************************/

import cors from 'cors'
import bodyParser from 'body-parser'
import express,{ Router } from 'express'
const routerInsertCalendario = Router()

import {routerInsertCalendario} from "../../controller/Controller_calendario/InsertCalen"

const bodyJsonParser = bodyParser.json()

routerInsertCalendario.post('/calendario', bodyJsonParser, async (req,res) =>{
    
    let contentType = req.headers['content-type']
    let dataCalendario = req.body

    let resultInsertCalendario = await insertResp(dataCalendario, contentType)

    return res.status(resultInsertCalendario.status_code).json(resultInsertCalendario)
})

export default routerInsertCalendario

