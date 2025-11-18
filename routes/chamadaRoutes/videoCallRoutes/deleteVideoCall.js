import { Router } from "express"
import cors from "cors"
const routerDeleteChamada = Router()

import { deleteChamada } from "../../../controller/Controler_chamada/controller_videoCall/deleteVideoCall.js"
import { authAccess } from "../../../config/middleware/authAcces.js"

routerDeleteChamada.delete('/chamada/:id', cors(), authAccess("ADMIN"), async (req, res) => {

    let id = req.params.id
    let result = await deleteChamada(id)

    return res.status(result.status_code).json(result)
})

export default routerDeleteChamada
