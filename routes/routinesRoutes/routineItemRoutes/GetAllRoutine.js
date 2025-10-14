/*********************************************************
 * Autor: Isabelly Lima
 * Date: 02/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para GET ALL ROUTINE ITEM
 ********************************************************/

import {Router} from "express"
import cors from 'cors'
const routerAllRoutineItem = Router()

import {getAllItensRoutines} from "../../../controller/Controllers_routines/controller_itemRoutine/getAllItensRoutines.js";

routerAllRoutineItem.get('/routineItem', cors(), async(req, res) => {

   let resultAllRoutineItem = await getAllItensRoutines()
   return res.status(resultAllRoutineItem.status_code).json(resultAllRoutineItem)
})

export default routerAllRoutineItem