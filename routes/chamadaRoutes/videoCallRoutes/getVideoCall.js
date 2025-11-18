import { Router } from "express"
import cors from "cors"
const routerGetChamada = Router()

import { getChamada } from "../../../controller/Controler_chamada/controller_videoCall/getVideoCall.js"
import { authAccess } from "../../../config/middleware/authAcces.js"

routerGetChamada.get('/chamada/:id', cors(), authAccess(["Responsável", "Médico", "Clínica", "ADMIN"]), async (req, res) => {

    let id = req.params.id
    let result = await getChamada(id)

    return res.status(result.status_code).json(result)
})

export default routerGetChamada
