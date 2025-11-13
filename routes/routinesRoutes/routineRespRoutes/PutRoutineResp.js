/*********************************************************
 * Autor: Isabelly Lima
 * Date: 02/10/2025
 * Versão: 2.0
 * Desc: App que irá realizar as 
 *       rotas para PUT ROUTINE ITEM
 ********************************************************/

import {Router} from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import {updateRoutineResponsable} from '../../../controller/Controllers_routines/controller_rotineRespon/updateRoutineRespon.js'
import { authAccess } from "../../../config/middleware/authAcces.js";

const routerUpdateRoutineRespon = Router()
const bodyJsonParser = bodyParser.json()

routerUpdateRoutineRespon.put('/routineResp/:id', cors(), bodyJsonParser, authAccess(["Responsável", "ADMIN"]),async (req, res) => {

    let id = req.params.id
    let contentType = req.body['content-type']
    let dataRespon = req.body

    let resulUpdateRoutineResp = await updateRoutineResponsable( id, dataRespon, contentType)

    return res.status(resulUpdateRoutineResp.status_code).json(resulUpdateRoutineResp)
})

export default routerUpdateRoutineRespon