/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para GET ALL DICA
 ********************************************************/

import { Router } from 'express'
import cors from 'cors'
const routerAllTip = Router()

import { getAllDica } from '../../controller/Controller_tip/listAllTip.js'

routerAllTip.get('/tip', cors(), async (req, res) => {
    
    let resultAllTip = await getAllDica()
    return res.status(resultAllTip.status_code).json(resultAllTip)
})

export default routerAllTip