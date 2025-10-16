/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para PUT DICA
 ********************************************************/

import { Router } from 'express'
import cors from 'cors'

const routerIdTip = Router()

import { getIdDica } from '../../controller/Controller_tip/getIdTip.js'

routerIdTip.get('/tip/:id', cors(), async (req, res) => {

    let id = req.params.id
    let resultIdTip = await getIdDica(id)

    return res.status(resultIdTip.status_code).json(resultIdTip)
})

export default routerIdTip