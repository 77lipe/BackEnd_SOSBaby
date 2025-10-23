/*********************************************************
 * Autor: Felipe Vieira
 * Date:21/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para POST DICA-SUBCATEGORIA
 ********************************************************/

import { Router } from 'express'
import bodyParser from 'body-parser'

const routerInsertTipSub = Router()
const bodyJsonParser = bodyParser.json()

import { insertTipSub } from '../../../controller/Controller_tip/Controller_tip_subcat/insertTipSub.js';

routerInsertTipSub.post('/tip/subcategoria/cadastro', bodyJsonParser, async (req,res) =>{
    
    let contentType = req.headers['content-type']
    let dataTipSub = req.body

    let resultInsertTipSub = await insertTipSub(dataTipSub, contentType)

    return res.status(resultInsertTipSub.status_code).json(resultInsertTipSub)
})

export default routerInsertTipSub