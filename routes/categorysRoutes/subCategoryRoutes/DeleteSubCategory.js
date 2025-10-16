/*********************************************************
 * Autor: Felipe Vieira
 * Date: 16/10/25
 * Versão: 1.0
 * Desc: App que irá realizar a 
 *       rota para GET Id Sub Categoria
 ********************************************************/

 import { Router } from "express"
 import cors from 'cors'
 const routerDeleteSub = Router()

 import { deleteSub } from "../../../controller/Controller_categorys/zController_subcategory/deleteSubCategory";

 routerDeleteSub.delete('/subcategory/:id', cors(), async (req,res) => {

    let id = require.req.id
    let resultDeleteSub = await deleteSub(id)

    return res.status(resultDeleteSub.status_code).json(resultDeleteSub)
 })

 export default routerDeleteSub