import bodyParser from 'body-parser'
import { Router } from 'express'
const routerInsertRoutineRespon = Router()

import {insertRelacionamentoRoutine} from "../../../controller/Controllers_routines/controller_relacionItemRoutine/insertRelacionRoutine.js"
import { authAccess } from "../../../config/middleware/authAcces.js";

const bodyJsonParser = bodyParser.json()

routerInsertRoutineRespon.post('/RelacionamentoRotina/cadastro', bodyJsonParser, authAccess(["Responsável", "ADMIN"]),async (req,res) =>{
    
    let contentType = req.headers['content-type']
    let dataRespon = req.body

    let resultInsertRoutineRespon = await insertRelacionamentoRoutine(dataRespon, contentType)
    return res.status(resultInsertRoutineRespon.status_code).json(resultInsertRoutineRespon)
})

export default routerInsertRoutineRespon