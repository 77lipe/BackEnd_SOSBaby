/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *         rotas para LOGIN USER
 ********************************************************/

import { Router } from "express"
import bodyParser from "body-parser"

import { loginUser } from "../../controller/Controller_user/LoginUser.js"

const routerLoginUser = Router()
const bodyJsonParser = bodyParser.json()

routerLoginUser.post('/login', bodyJsonParser, async (req, res) => {
    let contentType = req.body['content-type']
    let dataLogin = req.body

    let resultLoginUser = await loginUser(dataLogin, contentType)

    return res.status(resultLoginUser.status_code).json(resultLoginUser)
})

export default routerLoginUser

