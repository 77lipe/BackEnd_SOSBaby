/*********************************************************
 * Autor: Isabelly Lima
 * Date: 23/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para GET ALL CLINICA
 ********************************************************/

import {Router} from "express"
import cors from 'cors'
const routerAllClinica = Router()

import {getAllClinica} from "../../controller/Controller_Clinica/getAllClinica.js";
import { authAccess } from "../../config/middleware/authAcces.js";

routerAllClinica.get('/clinica', cors(), authAccess("ADMIN" || "Responsável" || "Médico"),async(req, res) => {

    let resultAllClinica = await getAllClinica()
    return res.status(resultAllClinica.status_code).json(resultAllClinica)
})

export default routerAllClinica