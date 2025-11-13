/*********************************************************
 * Autor: Isabelly Lima
 * Date: 30/09/25
 * Versão: 2.0
 * Desc: App que irá realizar as 
 *       rotas para PUT TYPE USER
 ********************************************************/

import {Router} from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import {UpdateTypeUser} from '../../controller/Controller_type_user/putTypeUser.js'
import {authAccess} from '../../config/middleware/authAcces.js'

const routerUpdateTypeUser = Router()
const bodyJsonParser = bodyParser.json()

routerUpdateTypeUser.put('/type/:id', cors(), bodyJsonParser, authAccess("ADMIN"), async (req, res) => {

    let id = req.params.id
    let contentType = req.body['content-type']
    let dataType = req.body

    let resulUpdateTypeUser = await UpdateTypeUser ( id, dataType, contentType)

    return res.status(resulUpdateTypeUser.status_code).json(resulUpdateTypeUser)
})

export default routerUpdateTypeUser