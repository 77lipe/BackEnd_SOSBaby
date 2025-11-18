/*********************************************************
 * Autor: Felipe Vieira
 * Date: 17/11/25
 * Versão: 1.0
 * Desc: Arquivo que irá realizar as 
 *       rotas para GET NAME RESPONSÁVEL
 ********************************************************/

import {Router} from 'express'
import bodyParser from 'body-parser'

const bodyJsonParser = bodyParser.json()
const routerFilterName = Router()
import { FilterNameRespController } from '../../controller/Controller_responsable/FilterGetRespName.js'
import { authAccess} from '../../config/middleware/authAcces.js'

routerFilterName.post('/filter/names', bodyJsonParser, authAccess(["Médico", "Clínica", "ADMIN"]),async (req, res) => {

    const contentType = req.headers['content-type']
    const dataName = req.body
    
    const result = await FilterNameRespController(dataName, contentType)
    return res.status(result.status_code).json(result)
})

export default routerFilterName