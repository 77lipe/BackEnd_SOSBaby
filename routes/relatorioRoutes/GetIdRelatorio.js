/*********************************************************
 * Autor: Isabelly Lima
 * Date: 06/11/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para SELECIONAR O RELATÓRIO POR ID
 ********************************************************/

import {Router} from "express";
import cors from 'cors'
const routerIdRelatorio = Router()

import { GetIDRelatorio } from "../../controller/Controller_relatorio/getIdRelatorio.js";
import { authAccess } from "../../config/middleware/authAcces.js";


routerIdRelatorio.get('/relatorio/:id', cors(), authAccess("Médico" || "ADMIN" || "Responsável") ,async (req, res) => {

    let id = req.params.id
    let resultIdRelatorio = await GetIDRelatorio(id)

    return res.status(resultIdRelatorio.status_code).json(resultIdRelatorio)
})

export default routerIdRelatorio