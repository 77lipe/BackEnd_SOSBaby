/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas de 'ESQUECI A SENHA'
 ********************************************************/

import bodyParser from "body-parser"
import { Router } from "express"
const routerResetPass = Router()
 
import { resetPassword } from "../../../controller/Controller_user/Controller_reqSenha/resetPassword.js"
 
const bodyJsonParser = bodyParser.json()

routerResetPass.post('/user/auth/reset-password', bodyJsonParser, async(req, res) => {

    let contentType = req.headers['content-type']
    let newPassword = req.body

    let resultResetPass = await resetPassword(newPassword, contentType)
    return res.status(resultResetPass.status_code).json(resultResetPass)
})

export default routerResetPass