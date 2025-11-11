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
import { generateCallToken } from "../../config/twilioVideoChamada/videoCall.js";

const routerVideoCall = Router()
const bodyJsonParser = bodyParser.json()

routerVideoCall.post("/twilio/call/token", bodyJsonParser, authAccess("Responsável" || "ADMIN" || "Médico"), async(req, res) => {

   const contentType = req.headers["content-type"]
    const dados = req.body

   const resultCall = await generateCallToken(req.user, dados, contentType)

    return res.status(resultCall.status_code).json(resultCall)
})

export default routerVideoCall