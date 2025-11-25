import {Router} from "express";
import cors from 'cors'

import {deleteRelacionamentoRoutine} from "../../../controller/Controllers_routines/controller_relacionItemRoutine/deleteRelacion.js";
import { authAccess } from "../../../config/middleware/authAcces.js";

const routerDeleteRoutineItem = Router()

routerDeleteRoutineItem.delete('/relacionRoutine/:id', cors(), authAccess(["Responsável", "ADMIN"]) ,async(req, res) => {

    let id = req.params.id
    let resultDeleteRoutineItem = await deleteRelacionamentoRoutine(id)

    return res.status(resultDeleteRoutineItem.status_code).json(resultDeleteRoutineItem)
})

export default routerDeleteRoutineItem