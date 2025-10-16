/*********************************************************
 * Autor: Felipe Vieira
 * Date: 16/10/25
 * Versão: 1.0
 * Desc: App que irá realizar a 
 *       rota para Deletar uma Categoria
 ********************************************************/

import { Router } from "express"
import cors from 'cors'
const routerDeleteCat = Router()

import { deleteCategorys } from "../../../controller/Controller_categorys/zController_category/deleteCategory.js";

routerDeleteCat.delete('/category/:id', cors(), async (res,req) => {

    let id = req.params.id
    let resultCat = await deleteCategorys(id)

    return res.statusCode(resultCat.status_code).json(resultCat)
})

export default routerDeleteCat
