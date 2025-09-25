/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para GET ALL SEXOS
 ********************************************************/

import { Router } from "express"
import bodyParser from "body-parser"
const routerInsertSex = Router()
const bodyJsonParser = bodyParser.json()

import { insertSex } from "../../controller/Controller_sexo/insertSex.js";

routerInsertSex.post('/sex/cadastro', bodyJsonParser, async (req,res) =>{
    
    let contentType = req.headers['content-type']
    let dataSex = req.body
    let resultInsertSex = await insertSex(dataSex, contentType)

    return res.status(resultInsertSex.status_code).json(resultInsertSex)
})

export default routerInsertSex