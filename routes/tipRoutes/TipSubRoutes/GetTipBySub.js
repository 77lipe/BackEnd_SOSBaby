/*********************************************************
 * Autor: Felipe Vieira
 * Date:21/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para GET DICA BY SUBCATEGORIA
 ********************************************************/

import { Router } from 'express'
import cors from 'cors'

const routerGetTipBySub = Router()
import { selectTipBySub } from '../../../controller/Controller_tip/Controller_tip_subcat/selectTipBySub.js'

routerGetTipBySub.get('/sub/tip/:id', cors(), async (req, res) => {
 
    let id = req.params.id
    let resultTipBySub = await selectTipBySub(id)

    return res.status(resultTipBySub.status_code).json(resultTipBySub)
})

export default routerGetTipBySub