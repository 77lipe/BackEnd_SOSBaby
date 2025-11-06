/*********************************************************
 * Autor: Isabelly Lima
 * Date: 23/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para GET ALL CLINICA
 ********************************************************/

import {Router} from "express";
import bodyParser from "body-parser";
const routerUpdateClinica = Router()

import {UpdateClinica} from "../../controller/Controller_Clinica/putClinica.js";
import { authAccess } from "../../config/middleware/authAcces.js";

routerUpdateClinica.put('/clinica/:id', bodyParser, authAccess("Clínica" || "ADMIN") ,async (req, res) => {

    let id = req.params.id
    let contentType = req.headers['content-type']
    let dadosClinica = req.body

    let resultUpdateClinica = await UpdateClinica(id, dadosClinica, contentType)
    return res.status(resultUpdateClinica.status_code).json(resultUpdateClinica)
})

export default routerUpdateClinica