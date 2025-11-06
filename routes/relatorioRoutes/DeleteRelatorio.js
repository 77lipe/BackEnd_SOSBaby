/*********************************************************
 * Autor: Isabelly Lima
 * Date: 06/11/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para DELETE DO RELATÓRIO
 ********************************************************/

import {Router} from "express"
import cors from 'cors'
const routerDeleteRelatorio = Router()

import { deleteRelatorio } from "../../controller/Controller_relatorio/deleteRelatorio.js";
import { authAccess } from "../../config/middleware/authAcces.js";

routerDeleteRelatorio.delete('/relatorio/:id', cors(),authAccess("Médico" || "ADMIN" || "Responsável"), async(req, res) => {

    let id = req.params.id
    let resultDeleteRelatorio = await deleteRelatorio(id)

    return res.status(resultDeleteRelatorio.status_code).json(resultDeleteRelatorio)
})

export default routerDeleteRelatorio