/*********************************************************
 * Autor: Isabelly Lima
 * Date: 06/11/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para LISTAR OS RELATÓRIOS
 ********************************************************/

import {Router} from "express"
import cors from 'cors'
const routerAllRelatorio = Router()

import { SelectAllRelatorio } from "../../controller/Controller_relatorio/getAllRelatorio.js";
import { authAccess } from "../../config/middleware/authAcces.js";

routerAllRelatorio.get('/relatorio', cors(),authAccess("Médico" || "ADMIN" || "Responsável"), async(req, res) => {

    let resultAllRelatorio = await SelectAllRelatorio()
    return res.status(resultAllRelatorio.status_code).json(resultAllRelatorio)
})

export default routerAllRelatorio