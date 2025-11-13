/*********************************************************
 * Autor: Isabelly Lima
 * Date: 23/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para POST CLINICA
 ********************************************************/


import {Router} from "express"
import bodyParser from "body-parser"
const routerInsertClinica = Router()

const bodyJsonParser = bodyParser.json()

import {insertClinica} from "../../controller/Controller_Clinica/insertClinica.js";
import { authAccess } from "../../config/middleware/authAcces.js";

routerInsertClinica.post('/clinica/cadastro', bodyJsonParser, authAccess(["ADMIN", "Clínica"]), async(req, res) => {

    let contentType = req.headers['content-type']
    let dadosClinica = req.body

    let resultInsertClinica = await insertClinica(dadosClinica, contentType)
    return res.status(resultInsertClinica.status_code).json(resultInsertClinica)
})

export default routerInsertClinica