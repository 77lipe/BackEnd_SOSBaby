/*********************************************************
 * Autor: Isabelly Lima
 * Date:  02/10/2025
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para POST DA ROUTINE RESPONSABLE
 ********************************************************/

import bodyParser from 'body-parser'
import { Router } from 'express'
const routerInsertRoutineRespon = Router()

import {insertRoutineRespon} from "../../controller/Controllers_routines/controller_rotineRespon/insertRoutineRespon"

const bodyJsonParser = bodyParser.json()

routerInsertRoutineRespon.post('/routine/responsable', bodyJsonParser, async (req,res) =>{
    
    let contentType = req.headers['content-type']
    let dataRespon = req.body

    let resultInsertRoutineRespon = await insertRoutineRespon(dataRespon, contentType)
    return res.status(resultInsertRoutineRespon.status_code).json(resultInsertRoutineRespon)
})

export default routerInsertRoutineRespon

