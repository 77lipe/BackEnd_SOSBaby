/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para POST USER
 ********************************************************/


import bodyParser from 'body-parser'
import { Router } from 'express'

const routerInsertUser = Router()
const bodyJsonParser = bodyParser.json()

import { insertUser } from "../../controller/Controller_user/insertUser.js"

routerInsertUser.post('/user/cadastro', bodyJsonParser, async (req,res) =>{
    
    let contentType = req.headers['content-type']
    let dataUser = req.body

    let resultInsertUser = await insertUser(dataUser, contentType)

    return res.status(resultInsertUser.status_code).json(resultInsertUser)
})

export default routerInsertUser

