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

import {searchIDRoutineResp} from "../../controller/Controllers_routines/controller_rotineRespon/getIdRoutineRespon";

routerIdRoutineResp.get('routine/:id', cors(), async (req, res) => {

    let id = req.params.id
    let resultIdRoutineResp = await searchIDRoutineResp(id)

    return res.status(resultIdRoutineResp.status_code).json(resultIdRoutineResp)
})

export default routerIdRoutineResp