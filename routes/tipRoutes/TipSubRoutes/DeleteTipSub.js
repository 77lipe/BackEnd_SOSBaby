/*********************************************************
 * Autor: Felipe Vieira
 * Date:21/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para DELETE DICA-SUBCATEGORIA
 ********************************************************/

import { Router } from 'express'
import cors from 'cors'

const routerDeleteTipSub = Router()
import { deleteTipSub } from '../../../controller/Controller_tip/Controller_tip_subcat/deleteTipSub.js'

routerDeleteTipSub.delete('/tip/subcategoria/:id', cors(), async (req, res) => {

    let id = req.params.id
    let resultDeleteTipSub = await deleteTipSub(id)

    return res.status(resultDeleteTipSub.status_code).json(resultDeleteTipSub)
})

export default routerDeleteTipSub