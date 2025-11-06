/*********************************************************
 * Autor: Isabelly Lima
 * Date: 06/11/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para INSERIR DO RELATÓRIO
 ********************************************************/

import {Router} from "express"
import bodyParser from "body-parser"
const routerInsertRelatorio = Router()

const bodyJsonParser = bodyParser.json()

import { insertRelatorio } from "../../controller/Controller_relatorio/insertRelatorio.js";
import { authAccess } from "../../config/middleware/authAcces.js";

routerInsertRelatorio.post('/relatorio/cadastro', bodyJsonParser, authAccess("Médico" || "ADMIN" || "Responsável"), async(req, res) => {

    let contentType = req.headers['content-type']
    let dadosRelatorio = req.body

    let resultInsertRelatorio = await insertRelatorio(dadosRelatorio, contentType)
    return res.status(resultInsertRelatorio.status_code).json(resultInsertRelatorio)
})

export default routerInsertRelatorio