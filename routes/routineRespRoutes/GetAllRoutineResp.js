/*********************************************************
 * Autor: Isabelly Lima
 * Date: 02/10/2025
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para GET ALL ROUTINE RESPONSABLE
 ********************************************************/

import {Router} from "express"
import cors from 'cors'
const routerAllRoutineRespon = Router()

import {SelectAllRoutineRespon} from "../../controller/Controllers_routines/controller_rotineRespon/getAllRoutineRespon";

routerAllRoutineRespon.get('/routineResp', cors(), async(req, res) => {

   let resultAllRoutineRespon = await SelectAllRoutineRespon()
   return res.status(resultAllRoutineRespon.status_code).json(resultAllRoutineRespon)
})

export default routerAllRoutineRespon