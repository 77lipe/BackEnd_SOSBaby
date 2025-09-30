/*********************************************************
 * Autor: Isabelly Lima
 * Date: 30/09/25
 * Versão: 2.0
 * Desc: App que irá realizar as 
 *       rotas para POST RESPONSABLE
 ********************************************************/

import {Router} from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import {UpdateResp} from '../../controller/Controller_responsable/UpdateResp.js'

const routerUpdateResponsable = Router()
const bodyJsonParser = bodyParser.json()

routerUpdateResponsable.put('/resp/:id', cors(), bodyJsonParser, async (req, res) => {

    let id = req.params.id
    let contentType = req.body['content-type']
    let dataResp = req.body

    let resulUpdateResp = await UpdateResp ( id, dataResp, contentType)

    return res.status(resulUpdateResp.status_code).json(resulUpdateResp)
})

export default routerUpdateResponsable