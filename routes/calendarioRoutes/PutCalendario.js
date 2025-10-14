/*********************************************************
 * Autor: Isabelly Lima
 * Date: 09/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para PUT CALENDARIO
 ********************************************************/

import {Router} from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import {UpdateCalendario} from '../../controller/Controller_calendario/UpdateCalen'

const routerUpdateCalendario = Router()
const bodyJsonParser = bodyParser.json()

routerUpdateCalendario.put('/calendario/:id', cors(), bodyJsonParser, async (req, res) => {

    let id = req.params.id
    let contentType = req.body['content-type']
    let dataCalendario = req.body

    let resulUpdateCalendario = await UpdateCalendario ( id, dataCalendario, contentType)

    return res.status(resulUpdateCalendario.status_code).json(resulUpdateCalendario)
})

export default routerUpdateCalendario