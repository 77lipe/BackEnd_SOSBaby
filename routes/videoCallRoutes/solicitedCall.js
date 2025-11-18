/********************************************************
 * Autor: Felipe Vieira
 * Date: 11/11/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para POST CALL
 ********************************************************/

import { Router } from "express"
import bodyParser from "body-parser"

import { authAccess } from "../../config/middleware/authAcces.js"
import { generativeTokenController } from "../../config/twilioVideoChamada/controllerCall.js"

const routerVideoCall = Router()
const bodyJsonParser = bodyParser.json()

routerVideoCall.post("/call/token", bodyJsonParser, authAccess(["Responsável", "ADMIN", "Médico", "Clínica"]), async(req, res) => {

    const contentType = req.headers["content-type"]
    const dados = req.body
    //console.log("Rotas req.user:", req.user);

    const resultCall = await generativeTokenController(req.user, dados, contentType)

    return res.status(resultCall.status_code).json(resultCall)
})

export default routerVideoCall