/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para PUT DICA
 ********************************************************/

import bodyParser from 'body-parser'
import { Router } from 'express'

const routerUpdateTip = Router()
const bodyJsonParser = bodyParser.json()

import { updateDicas } from "../../controller/Controller_tip/updateTip.js"
import {authAccess} from '../../config/middleware/authAcces.js'

routerUpdateTip.put('/tip/:id', bodyJsonParser, authAccess("ADMIN"), async (req,res) =>{
    
    let id = req.params.id
    let contentType = req.headers['content-type']
    let dataTip = req.body

    let resultUpdateTip = await updateDicas(id, dataTip, contentType)

    return res.status(resultUpdateTip.status_code).json(resultUpdateTip)
})

export default routerUpdateTip