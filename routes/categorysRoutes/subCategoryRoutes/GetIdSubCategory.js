/*********************************************************
 * Autor: Felipe Vieira
 * Date: 16/10/25
 * Versão: 1.0
 * Desc: App que irá realizar a 
 *       rota para GET Id Sub Categoria
 ********************************************************/

import { Router } from "express"
import cors from 'cors'
const routerGetIdSub = Router()
 
import { getIdSub } from "../../../controller/Controller_categorys/zController_subcategory/idSubCategory"

routerGetIdSub.get('/subcategory/:id', cors(), async (res, req) => {

    let id = require.req.id
    let resultIdSub = await getIdSub(id)

    return res.statusCode(resultIdSub.status_code).json(resultIdSub)
})

export default routerGetIdSub