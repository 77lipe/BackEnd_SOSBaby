import { Router } from "express"
import bodyParser from "body-parser"
const routerInsertChamada = Router()

const bodyJsonParser = bodyParser.json()

import {insertChamada} from "../../../controller/Controler_chamada/controller_videoCall/insertVideoCall.js"
import { authAccess } from "../../../config/middleware/authAcces.js"

routerInsertChamada.post('/chamada/cadastro', bodyJsonParser, authAccess(["Responsável", "Médico", "Clínica", "ADMIN"]), async (req, res) => {

    let contentType = req.headers['content-type']
    let dados = req.body

    let result = await insertChamada(dados, contentType)

    return res.status(result.status_code).json(result)
})

export default routerInsertChamada
