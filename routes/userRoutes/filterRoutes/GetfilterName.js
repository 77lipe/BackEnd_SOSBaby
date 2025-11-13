/*********************************************************
 * Autor: Felipe Vieira
 * Date:13/11/25
 * Versão: 1.0
 * Desc: Arquivo que irá realizar as 
 *       rotas para GET NAME USERS
 ********************************************************/

import {Router} from 'express'
import bodyParser from 'body-parser'

const bodyJsonParser = bodyParser.json()
const routerFilterName = Router()
import { FilterNameController } from '../../../controller/Controller_user/ControllerFilter/FilterNameControlller.js'

routerFilterName.post('/filter/names', bodyJsonParser, async (req, res) => {

    const contentType = req.headers['content-type']
    const dataName = req.body
    
    const result = await FilterNameController(dataName, contentType)
    return res.status(result.status_code).json(result)
})

export default routerFilterName