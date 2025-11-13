/*********************************************************
 * Autor: Isabelly Lima
 * Date: 30/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para PUT DOCTOR
 ********************************************************/

import {Router} from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import {updateDoctor} from '../../controller/Controller_doctor/putDoctor.js'
import { authAccess } from "../../config/middleware/authAcces.js";

const routerUpdateDoctor = Router()
const bodyJsonParser = bodyParser.json()

routerUpdateDoctor.put('/doctor/:id', cors(), bodyJsonParser, authAccess(["Médico", "ADMIN"]) ,async (req, res) => {

    let id = req.params.id
    let contentType = req.body['content-type']
    let dataDoc = req.body

    let resulUpdateDoctor = await updateDoctor( id, dataDoc, contentType)

    return res.status(resulUpdateDoctor.status_code).json(resulUpdateDoctor)
})

export default routerUpdateDoctor