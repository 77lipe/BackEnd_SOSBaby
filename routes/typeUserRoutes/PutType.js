/*********************************************************
 * Autor: Isabelly Lima
 * Date: 30/09/25
 * Versão: 2.0
 * Desc: App que irá realizar as 
 *       rotas para POST TYPE USER
 ********************************************************/

import {Router} from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import {updateTypeUser} from '../../controller/Controller_type_user/putTypeUser.js'

const routerUpdateTypeUser = Router()
const bodyJsonParser = bodyParser.json()

routerUpdateTypeUser.put('/type/:id', cors(), bodyJsonParser, async (req, res) => {

    let id = req.params.id
    let contentType = req.body['content-type']
    let dataType = req.body

    let resulUpdateTypeUser = await updateTypeUser ( id, dataType, contentType)

    return res.status(resulUpdateTypeUser.status_code).json(resulUpdateTypeUser)
})

export default routerUpdateTypeUser