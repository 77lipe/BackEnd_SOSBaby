/*********************************************************
 * Autor: Felipe Vieira
 * Date: 16/10/25
 * Versão: 1.0
 * Desc: App que irá realizar a 
 *       rota para Deletar uma Sub Categoria
 ********************************************************/

 import { Router } from "express"
 import cors from 'cors'
 const routerDeleteSub = Router()

 import { deleteSub } from "../../../controller/Controller_categorys/zController_subcategory/deleteSubCategory.js"

 routerDeleteSub.delete('/subcategory/:id', cors(), async (req,res) => {

    let id = req.params.id
    let resultDeleteSub = await deleteSub(id)

    return res.status(resultDeleteSub.status_code).json(resultDeleteSub)
 })

 export default routerDeleteSub