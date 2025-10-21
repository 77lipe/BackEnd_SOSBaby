/*********************************************************
 * Autor: Felipe Vieira
 * Date:21/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para PUT DICA-SUBCATEGORIA
 ********************************************************/

import { Router } from 'express'
import cors from 'cors'

const routerGetAllTipSub = Router()
import { selectAllTipSub } from '../../../controller/Controller_tip/Controller_tip_subcat/selectAllTipSub.js'

routerGetAllTipSub.get('/tipSub', cors(), async (req, res) => {
    console.log("Rota foi chamada");
    
    let resultAllTipSub = await selectAllTipSub()
    return res.status(resultAllTipSub.status_code).json(resultAllTipSub)
})
export default routerGetAllTipSub