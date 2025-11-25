import { Router } from "express"
import cors from "cors"
const routerGetRotina = Router()

import { getUserRelacion } from "../../../controller/Controllers_routines/controller_relacionItemRoutine/viewUsersRoutine.js"
import { authAccess } from "../../../config/middleware/authAcces.js"

routerGetRotina.get('/viewUserRoutines/:id', cors(), authAccess(["Responsável", "ADMIN"]), async (req, res) => {

    let id = req.params.id
    let resultView = await getUserRelacion(id)

    return res.status(resultView.status_code).json(resultView)
})

export default routerGetRotina