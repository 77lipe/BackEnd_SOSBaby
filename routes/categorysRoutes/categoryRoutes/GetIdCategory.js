/*********************************************************
 * Autor: Felipe Vieira
 * Date: 16/10/25
 * Versão: 1.0
 * Desc: App que irá realizar a 
 *       rota para GET Id Categoria
 ********************************************************/

import { Router } from "express"
import cors from 'cors'
const routerGetIdCat = Router()

import { getIdCategory } from "../../../controller/Controller_categorys/zController_category/getIdCategory.js"

routerGetIdCat.get('/category/:id', cors(), async (res,req) => {
    
    let id = req.params.id
    let resultIdCat = await getIdCategory(id)

    return res.statusCode(resultIdCat.status_code).json(resultIdCat)
})

export default routerGetIdCat
