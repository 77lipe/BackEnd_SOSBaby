/*********************************************************
 * Autor: Isabelly Lima
 * Date: 30/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para GET ALL DOCTOR
 ********************************************************/

import { Router } from "express"
import bodyParser from "body-parser"
const routerInsertDoctor = Router()
const bodyJsonParser = bodyParser.json()

import {insertDoctor} from "../../controller/Controller_doctor/insertDoctor.js"
import { authAccess } from "../../config/middleware/authAcces.js";

routerInsertDoctor.post('/doctor/cadastro', bodyJsonParser, authAccess(["Médico", "ADMIN"]) ,async (req,res) =>{
    
    let contentType = req.headers['content-type']
    let dataDoc = req.body
    let resultInsertDoctor = await insertDoctor(dataDoc, contentType)

    return res.status(resultInsertDoctor.status_code).json(resultInsertDoctor)
})

export default routerInsertDoctor