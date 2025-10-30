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

import {selectAllClinica} from "../../controller/Controller_Clinica/getAllClinica.js";

routerAllClinica.get('/clinica', cors(), async(req, res) => {

    let resultAllClinica = await selectAllClinica()
    return res.status(resultAllClinica.status_code).json(resultAllClinica)
})

export default routerAllClinica