/*********************************************************
 * Autor: Isabelly Lima
 * Date: 02/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para PUT ROUTINE ITEM
 ********************************************************/

import {Router} from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import {updateItemRoutine} from '../../../controller/Controllers_routines/controller_itemRoutine/updateItemRoutine.js'

const routerUpdateRoutineItem = Router()
const bodyJsonParser = bodyParser.json()

routerUpdateRoutineItem.put('/routine/:id', cors(), bodyJsonParser, async (req, res) => {

    let id = req.params.id
    let contentType = req.body['content-type']
    let dataItem = req.body

    let resulUpdateRoutineItem = await updateItemRoutine ( id, dataItem, contentType)

    return res.status(resulUpdateRoutineItem.status_code).json(resulUpdateRoutineItem)
})

export default routerUpdateRoutineItem