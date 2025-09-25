/*********************************************************
 * Autor: Isabell Lima
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para POST RESPONSÁVEL
 ********************************************************/

import express, {Router} from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import {UpdateResp} from '../../controller/Controller_responsable/UpdateResp.js'

const router = Router()
const bodyJsonParser = bodyParser.json()

router.put('/resp/update', bodyJsonParser, async (req, res) => {

    let contentType = req.body['content-type']
    let dataResponsable = req.body

    let resulUpdateResponsable = await UpdateResp(dataResponsable, contentType)

    return res.status(resulUpdateResponsable.status_code).json(resulUpdateResponsable)
})

export default router