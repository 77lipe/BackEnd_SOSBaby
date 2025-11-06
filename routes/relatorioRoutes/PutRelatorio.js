/*********************************************************
 * Autor: Isabelly Lima
 * Date: 06/11/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para ATUALIZAR O RELATÓRIO
 ********************************************************/

import {Router} from "express";
import bodyParser from "body-parser";
const routerUpdateRelatorio = Router()

import { updateRelatorio } from "../../controller/Controller_relatorio/putRelatorio.js";
import { authAccess } from "../../config/middleware/authAcces.js";

routerUpdateRelatorio.put('/relatorio/:id', bodyParser, authAccess("Médico" || "ADMIN" || "Responsável") ,async (req, res) => {

    let id = req.params.id
    let contentType = req.headers['content-type']
    let dadosRelatorio = req.body

    let resultUpdateRelatorio = await updateRelatorio(id, dadosRelatorio, contentType)
    return res.status(resultUpdateRelatorio.status_code).json(resultUpdateRelatorio)
})

export default routerUpdateRelatorio