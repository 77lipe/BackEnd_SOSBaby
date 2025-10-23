/*********************************************************
 * Autor: Felipe Vieira
 * Date:21/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para PUT DICA-SUBCATEGORIA
 ********************************************************/

import { Router } from 'express'
import bodyParser from 'body-parser'

const routerUpdateTipSub = Router()
const bodyJsonParser = bodyParser.json()

import { updateTipSub } from '../../../controller/Controller_tip/Controller_tip_subcat/updateTipSub.js';

routerUpdateTipSub.put('/tip/subcategoria/:id', bodyJsonParser, async (req,res) =>{
    
    let id = req.params.id
    let contentType = req.headers['content-type']
    let dataTipSub = req.body

    let resultUpdateTipSub = await updateTipSub(id, dataTipSub, contentType)

    return res.status(resultUpdateTipSub.status_code).json(resultUpdateTipSub)
})

export default routerUpdateTipSub