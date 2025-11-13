/*********************************************************
 * Autor: Isabelly Lima
 * Date:  23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para POST DO TYPE USER
 ********************************************************/

import bodyParser from 'body-parser'
import { Router } from 'express'
const routerInsertTypeUser = Router()

import {insertTypeUser} from "../../controller/Controller_type_user/InsertTypeUser.js"
import { authAccess } from '../../config/middleware/authAcces.js'

const bodyJsonParser = bodyParser.json()

routerInsertTypeUser.post('/type/cadastro', bodyJsonParser, authAccess("ADMIN"), async (req,res) =>{
    
    let contentType = req.headers['content-type']
    let dataTypeUser = req.body

    let resultInsertTypeUser = await insertTypeUser(dataTypeUser, contentType)

    return res.status(resultInsertTypeUser.status_code).json(resultInsertTypeUser)
})

export default routerInsertTypeUser

