/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para POST USER
 ********************************************************/

import express, {Router} from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import {updateUser} from '../../controller/Controller_user/putUser'

const routerUpdateUser = Router()
const bodyJsonParser = bodyParser.json()

routerUpdateUser.put('/user/update', bodyJsonParser, async (req, res) => {

    let contentType = req.body['content-type']
    let dataUser = req.body

    let resulUpdateUser = await updateUser(dataUser, contentType)

    return res.status(resulUpdateUser.status_code).json(resulUpdateUser)
})

export default routerUpdateUser