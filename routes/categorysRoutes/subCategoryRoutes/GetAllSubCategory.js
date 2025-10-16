/*********************************************************
 * Autor: Felipe Vieira
 * Date: 16/10/25
 * Versão: 1.0
 * Desc: App que irá realizar a 
 *       rota para GET Id Sub Categoria
 ********************************************************/

import { Router } from "express"
import cors from 'cors'
const routerGetAllSub = Router()

import { listAllSub } from "../../../controller/Controller_categorys/zController_subcategory/listAllCategory"

routerGetAllSub.get('/subcategorys', cors(), async (req,res) => {

    let resultAllSub = await listAllSub()
    return res.status(resultAllSub.status_code).json(resultAllSub)
})

export default routerGetAllSub