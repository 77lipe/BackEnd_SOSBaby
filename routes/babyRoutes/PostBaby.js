/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para POST BABY
 ********************************************************/

import {Router} from "express"
import bodyParser from "body-parser"
const routerInsertBaby = Router()

const bodyJsonParser = bodyParser.json()

import { insertBebe } from "../../controller/Controller_baby/insertBebe.js";

routerInsertBaby.post('/baby/cadastro', bodyJsonParser , async(req, res) => {

    let contentType = req.headers['content-type']
    let dadosBaby = req.body

    let resultInsertBaby = await insertBebe(dadosBaby, contentType)
    return res.status(resultInsertBaby.status_code).json(resultInsertBaby)
})

export default routerInsertBaby