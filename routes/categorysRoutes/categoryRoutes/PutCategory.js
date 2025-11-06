/*********************************************************
 * Autor: Felipe Vieira
 * Date: 16/10/25
 * Versão: 1.0
 * Desc: App que irá realizar a 
 *       rota para PUT Categoria
 ********************************************************/

import { Router } from "express"
import bodyParser from "body-parser"
const routerPutCategory = Router()
 
const bodyJsonParser = bodyParser.json()
import { updateCategory } from "../../../controller/Controller_categorys/zController_category/updateCategory.js"
import { authAccess } from "../../../config/middleware/authAcces.js";


routerPutCategory.put('/category/:id', bodyJsonParser, authAccess("ADMIN") ,async (req,res) => {

    let id = req.params.id
    let contentType = req.headers['content-type']
    let dadosCat = req.body

    let resultCat = await updateCategory(id,dadosCat,contentType)
    return res.status(resultCat.status_code).json(resultCat)
})

export default routerPutCategory