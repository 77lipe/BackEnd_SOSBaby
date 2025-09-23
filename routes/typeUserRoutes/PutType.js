/*********************************************************
 * Autor: Isabell Lima
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para POST TYPE USER
 ********************************************************/

import {Router} from 'express'
import bodyParser from 'body-parser'

import {updateTypeUser} from '../../controller/Controller_type_user/putTypeUser'

const router = Router()
const bodyJsonParser = bodyParser.json()

router.put('/type/update', bodyJsonParser, async (req, res) => {

    let contentType = req.body['content-type']
    let dataTypeUser = req.body

    let resultUpdateTypeUser = await updateTypeUser(dataTypeUser, contentType)

    return res.status(resultUpdateTypeUser.status_code).json(resultUpdateTypeUser)
})

export default router