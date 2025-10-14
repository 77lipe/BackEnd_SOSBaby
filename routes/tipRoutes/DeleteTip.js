/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para DELETE DICA
 ********************************************************/

import { Router } from 'express'
import cors from 'cors'
const routerDeleteTip = Router()

import { deleteDica } from '../../controller/Controller_tip/deleteTip.js'

routerDeleteTip.delete('/tip/:id', cors(), async (req, res) => {
    
    let id = req.params.id
    let resultDeleteTip = await deleteDica(id)

    return res.status(resultDeleteTip.status_code).json(resultDeleteTip)
})

export default routerDeleteTip