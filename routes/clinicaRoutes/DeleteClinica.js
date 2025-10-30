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

import {deleteClinica} from "../../controller/Controller_Clinica/deleteClinica.js";

routerDeleteClinica.delete('/clinica/:id', cors(), async(req, res) => {

    let id = req.params.id
    let resultDeleteClinica = await deleteClinica(id)

    return res.status(resultDeleteClinica.status_code).json(resultDeleteClinica)
})

export default routerDeleteClinica