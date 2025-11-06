/*********************************************************
 * Autor: Isabelly Lima
 * Date:  02/10/2025
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para GET ID DO TYPE USER
 ********************************************************/

import {Router} from "express"
import cors from 'cors'
const routerIdRoutineResp = Router()

import {getIdRoutineResponsable} from "../../../controller/Controllers_routines/controller_rotineRespon/getIdRoutineRespon.js";
import { authAccess } from "../../../config/middleware/authAcces.js";

routerIdRoutineResp.get('routineResp/:id', cors(), authAccess("Responsável" || "ADMIN"),async (req, res) => {

    let id = req.params.id
    let resultIdRoutineResp = await getIdRoutineResponsable(id)

    return res.status(resultIdRoutineResp.status_code).json(resultIdRoutineResp)
})

export default routerIdRoutineResp