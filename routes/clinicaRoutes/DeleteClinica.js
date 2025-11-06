/*********************************************************
 * Autor: Isabelly Lima
 * Date: 23/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para DELETE DA CLÍNICA
 ********************************************************/

import {Router} from "express"
import cors from 'cors'
const routerDeleteClinica = Router()

import {DeleteClinica} from "../../controller/Controller_Clinica/deleteClinica.js";
import { authAccess } from "../../config/middleware/authAcces.js";

routerDeleteClinica.delete('/clinica/:id', cors(), authAccess("ADMIN") ,async(req, res) => {

    let id = req.params.id
    let resultDeleteClinica = await DeleteClinica(id)

    return res.status(resultDeleteClinica.status_code).json(resultDeleteClinica)
})

export default routerDeleteClinica