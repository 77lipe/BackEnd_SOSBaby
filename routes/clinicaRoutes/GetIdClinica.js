/*********************************************************
 * Autor: Isabelly Lima
 * Date: 23/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para GET IDD CLINICA
 ********************************************************/

import {Router} from "express";
import cors from 'cors'
const routerIdClinica = Router()

import {GetIdClinica} from "../../controller/Controller_Clinica/getIdClinica.js";
import { authAccess } from "../../config/middleware/authAcces.js";

routerIdClinica.get('/clinica/:id', cors(), authAccess(["ADMIN", "Médico", "Responsável"]) ,async (req, res) => {

    let id = req.params.id
    let resultIdClinica = await GetIdClinica(id)

    return res.status(resultIdClinica.status_code).json(resultIdClinica)
})

export default routerIdClinica