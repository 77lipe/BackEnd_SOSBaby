/*********************************************************
 * Autor: Felipe Vieira
 * Date:21/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para GET SUBCAGETORIA BY DICA
 ********************************************************/

import { Router } from 'express'
import cors from 'cors'

const routerGetSubByTip = Router()
import { selectSubByDTip } from '../../../controller/Controller_tip/Controller_tip_subcat/selectSubByTip.js'

routerGetSubByTip.get('/tip/subcategoria/:id', cors(), async (req, res) => {

    let id = req.params.id
    let resultSubByTip = await selectSubByDTip(id)

    return res.status(resultSubByTip.status_code).json(resultSubByTip)
})

export default routerGetSubByTip