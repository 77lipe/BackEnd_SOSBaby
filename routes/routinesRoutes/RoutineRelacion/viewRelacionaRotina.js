import { Router } from "express"
import cors from "cors"
const routerGetRotina = Router()

import { getRelacionByRotina } from "../../../controller/Controllers_routines/controller_relacionItemRoutine/viewRelacionRespon.js"
import { authAccess } from "../../../config/middleware/authAcces.js"

routerGetRotina.get('/viewRoutines/:id', cors(), authAccess(["Responsável", "ADMIN"]), async (req, res) => {

    let id = req.params.id
    let resultView = await getRelacionByRotina(id)

    return res.status(resultView.status_code).json(resultView)
})

export default routerGetRotina