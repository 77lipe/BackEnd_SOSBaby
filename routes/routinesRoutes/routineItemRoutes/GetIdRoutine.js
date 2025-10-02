/*********************************************************
 * Autor: Isabelly Lima
 * Date: 02/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para GET ID ROUTINE ITEM
 ********************************************************/

import {Router} from "express"
import cors from 'cors'
const routerIdRoutineItem = Router()

import {getIdItemRoutine} from "../../controller/Controllers_routines/controller_itemRoutine/getIdItemRoutine";

routerIdRoutineItem.get('routineItem/:id', cors(), async (req, res) => {

    let id = req.params.id
    let resultIdRoutineItem = await getIdItemRoutine(id)

    return res.status(resultIdRoutineItem.status_code).json(resultIdRoutineItem)
})

export default routerIdRoutineItem