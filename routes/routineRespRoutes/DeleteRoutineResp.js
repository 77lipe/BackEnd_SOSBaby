/*********************************************************
 * Autor: Isabelly Lima
 * Date:  02/10/2025
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para DELETE ROUTINE RESPONSABLE
 ********************************************************/

import {Router} from "express";
import cors from 'cors'

import {DeleteRoutineResp} from "../../controller/Controllers_routines/controller_rotineRespon/deleteRoutineRespon";

const routerDeleteRoutineResp = Router()

routerDeleteRoutineResp.delete('/routineResp/:id', cors(), async(req, res) => {

    let id = req.params.id
    let resultDeleteRoutineResp = await DeleteRoutineResp(id)

    return res.status(resultDeleteRoutineResp.status_code).json(resultDeleteRoutineResp)
})

export default routerDeleteRoutineResp