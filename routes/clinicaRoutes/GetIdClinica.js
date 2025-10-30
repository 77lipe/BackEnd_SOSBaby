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

import {selectIdClinica} from "../../controller/Controller_Clinica/getIdClinica.js";

routerIdClinica.get('/clinica/:id', cors(), async (req, res) => {

    let id = req.params.id
    let resultIdClinica = await selectIdClinica(id)

    return res.status(resultIdClinica.status_code).json(resultIdClinica)
})

export default routerIdClinica