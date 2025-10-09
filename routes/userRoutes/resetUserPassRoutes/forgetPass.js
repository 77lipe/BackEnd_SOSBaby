/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas de 'ESQUECI A SENHA'
 ********************************************************/

import bodyParser from "body-parser"
import { Router } from "express"
const forgetPassRouter = Router()

import { forgotPassword } from "../../../controller/Controller_user/Controller_reqSenha/forgetPassword.js"

const bodyJsonParser = bodyParser.json()

forgetPassRouter.post('/user/auth/password', bodyJsonParser, async (req, res) => {

    let contentType = req.headers['content-type']
    let dataEmail = req.body.email

    let resultForgetPass = await forgotPassword(dataEmail, contentType)

    return res.status(resultForgetPass.status_code).json(resultForgetPass)
})

export default forgetPassRouter