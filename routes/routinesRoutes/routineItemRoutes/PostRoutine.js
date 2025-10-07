/*********************************************************
 * Autor: Isabelly Lima
 * Date: 02/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para POST ROUTINE ITEM
 ********************************************************/


import bodyParser from 'body-parser'
import {Router} from 'express'
const routerInsertRoutineItem = Router()

import {insertItemRoutine} from "../../../controller/Controllers_routines/controller_itemRoutine/insertItemRoutine.js"

const bodyJsonParser = bodyParser.json()

routerInsertRoutineItem.post('/routineItem/cadastro', bodyJsonParser, async (req,res) =>{
    
    let contentType = req.headers['content-type']
    let dataItem = req.body

    let resultInsertRoutineItem = await insertItemRoutine(dataItem, contentType)

    return res.status(resultInsertRoutineItem.status_code).json(resultInsertRoutineItem)
})

export default routerInsertRoutineItem

