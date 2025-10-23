/*********************************************************
 * Autor: Felipe Vieira
 * Date:21/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para GET ID DICA-SUBCATEGORIA
 ********************************************************/

import { Router } from 'express'
import cors from 'cors'

const routerGetIdTipSub = Router()
import { selectIsTipSub } from '../../../controller/Controller_tip/Controller_tip_subcat/selectIdTipSub.js'

routerGetIdTipSub.get('/tip/subcategoria/:id', cors(), async (req, res) => {

    let id = req.params.id
    let resultIdTipSub = await selectIsTipSub(id)

    return res.status(resultIdTipSub.status_code).json(resultIdTipSub)
})

export default routerGetIdTipSub