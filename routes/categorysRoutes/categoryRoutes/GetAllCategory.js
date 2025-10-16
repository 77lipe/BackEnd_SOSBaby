
/*********************************************************
 * Autor: Felipe Vieira
 * Date: 16/10/25
 * Versão: 1.0
 * Desc: App que irá realizar a 
 *       rota para GET ALL Categoria
 ********************************************************/

import { Router } from "express"
import cors from 'cors'
const routerGetAllCat = Router()

import { listAllCategory } from "../../../controller/Controller_categorys/zController_category/listAllCategory"

routerGetAllCat.get('/categorys', cors(), async (req,res) => {

    let resultCat = await listAllCategory()
    return res.status(resultCat.status_code).json(resultCat)
})

export default routerGetAllCat