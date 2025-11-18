import { Router } from "express"
import bodyParser from "body-parser"
const routerInsertParticipanteChamada = Router()

const bodyJsonParser = bodyParser.json()

import { insertChamadaParticipante } from "../../../controller/Controler_chamada/controller_participante/insertParticipante.js"
import { authAccess } from "../../../config/middleware/authAcces.js"

routerInsertParticipanteChamada.post('/participante_chamada/cadastro', bodyJsonParser, authAccess(["Responsável", "Médico", "Clínica", "ADMIN"]), async (req, res) => {

        let contentType = req.headers["content-type"]
        let dados = req.body

        let result = await insertChamadaParticipante(dados, contentType)

        return res.status(result.status_code).json(result)
    }
)

export default routerInsertParticipanteChamada
