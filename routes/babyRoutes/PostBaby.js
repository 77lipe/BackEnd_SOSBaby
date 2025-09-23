/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para POST USER
 ********************************************************/

import express, {Router} from "express"
import bodyParser from "body-parser"
const routerInsertBaby = Router()

import { insertBebe } from "../../controller/Controller_baby/insertBebe";

routerInsertBaby.post('/baby/cadastro', bodyParser, async(req, res) => {

    let contentType = req.body
    let dadosBaby = req.headers['content-type']

    let resultInsertBaby = await insertBebe(dadosBaby, contentType)
    return res.status(resultInsertBaby.status_code).json(resultInsertBaby)
})

export default routerInsertBaby