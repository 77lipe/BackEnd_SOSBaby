/*********************************************************
 * Autor: Isabell Lima
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para POST TYPE USER
 ********************************************************/

import {Router} from 'express'
import bodyParser from 'body-parser'

import {UpdateTypeUser} from '../../controller/Controller_type_user/putTypeUser.js'

const router = Router()
const bodyJsonParser = bodyParser.json()

router.put('/type/:id', bodyJsonParser, async (req, res) => {

    let contentType = req.body['content-type']
    let dataTypeUser = req.body

    let resultUpdateTypeUser = await UpdateTypeUser(dataTypeUser, contentType)

    return res.status(resultUpdateTypeUser.status_code).json(resultUpdateTypeUser)
})

export default router