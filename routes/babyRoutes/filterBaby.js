/*********************************************************
 * Autor: Felipe Vieira
 * Date: 17/11/25
 * Versão: 1.0
 * Desc: Arquivo que irá realizar as 
 *       rotas para GET NAME BABY
 ********************************************************/

import {Router} from 'express'
import bodyParser from 'body-parser'

const bodyJsonParser = bodyParser.json()
const routerFilterName = Router()
import { FilterNameBabyController } from '../../controller/Controller_baby/FilterGetBabyName.js'
import { authAccess} from '../../config/middleware/authAcces.js'

routerFilterName.post('/filter/nameBaby', bodyJsonParser, authAccess(["Médico", "Clínica", "ADMIN"]),async (req, res) => {

    const contentType = req.headers['content-type']
    const dataName = req.body
    
    const result = await FilterNameBabyController(dataName, contentType)
    return res.status(result.status_code).json(result)
})

export default routerFilterName