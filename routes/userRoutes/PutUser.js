/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para POST USER
 ********************************************************/

import {Router} from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import {updateUser} from '../../controller/Controller_user/putUser.js'

const routerUpdateUser = Router()
const bodyJsonParser = bodyParser.json()

routerUpdateUser.put('/user/:id', cors(), bodyJsonParser, async (req, res) => {

    let id = req.params.id
    let contentType = req.body['content-type']
    let dataUser = req.body

    let resulUpdateUser = await updateUser( id, dataUser, contentType)

    return res.status(resulUpdateUser.status_code).json(resulUpdateUser)
})

export default routerUpdateUser