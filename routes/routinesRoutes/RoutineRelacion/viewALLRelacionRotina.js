import { Router } from "express"
import cors from "cors"
const routerGetAllRotina = Router()

import { getALLRoutines } from "../../../controller/Controllers_routines/controller_relacionItemRoutine/viewAllRelationRoutines.js"
import { authAccess } from "../../../config/middleware/authAcces.js"

routerGetAllRotina.get('/viewRoutines', cors(), authAccess(["Responsável", "ADMIN"]), async (req, res) => {

    let resultView = await getALLRoutines()

    return res.status(resultView.status_code).json(resultView)
})

export default routerGetAllRotina