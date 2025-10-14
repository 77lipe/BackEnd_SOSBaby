/*********************************************************
 * Autor: Isabelly Lima
 * Date:  02/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para DELETE DO ROUTINE ITEM
 ********************************************************/

import {Router} from "express";
import cors from 'cors'

import {deleteItemRoutine} from "../../../controller/Controllers_routines/controller_itemRoutine/deleteItemRoutine.js";

const routerDeleteRoutineItem = Router()

routerDeleteRoutineItem.delete('/routineItem/:id', cors(), async(req, res) => {

    let id = req.params.id
    let resultDeleteRoutineItem = await deleteItemRoutine(id)

    return res.status(resultDeleteRoutineItem.status_code).json(resultDeleteRoutineItem)
})

export default routerDeleteRoutineItem