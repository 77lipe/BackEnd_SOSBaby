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
 
import { getIdSub } from "../../../controller/Controller_categorys/zController_subcategory/idSubCategory.js"

routerGetIdSub.get('/subcategory/:id', cors(), async (req, res) => {

    let id = req.params.id
    let resultIdSub = await getIdSub(id)

    return res.status(resultIdSub.status_code).json(resultIdSub)
})

export default routerGetIdSub