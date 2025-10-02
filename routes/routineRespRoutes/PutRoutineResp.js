/*********************************************************
 * Autor: Isabelly Lima
 * Date: 02/10/2025
 * Versão: 2.0
 * Desc: App que irá realizar as 
 *       rotas para PUT ROUTINE ITEM
 ********************************************************/

import {Router} from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import {updateRoutineRespon} from '../../controller/Controllers_routines/controller_rotineRespon/updateRoutineRespon'

const routerUpdateRoutineRespon = Router()
const bodyJsonParser = bodyParser.json()

routerUpdateRoutineRespon.put('/routineResp/:id', cors(), bodyJsonParser, async (req, res) => {

    let id = req.params.id
    let contentType = req.body['content-type']
    let dataRespon = req.body

    let resulUpdateRoutineResp = await updateRoutineRespon ( id, dataRespon, contentType)

    return res.status(resulUpdateRoutineResp.status_code).json(resulUpdateRoutineResp)
})

export default routerUpdateRoutineRespon