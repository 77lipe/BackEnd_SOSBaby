/*********************************************************
 * Autor: Felipe Vieira
 * Date: 16/10/25
 * Versão: 1.0
 * Desc: App que irá realizar a 
 *       rota para POST Sub Categoria
 ********************************************************/

 import { Router } from "express"
 import bodyParser from "body-parser"
 const routerInsertCategory = Router()
 
 const bodyJsonParser = bodyParser.json()
 import { insertCategory } from "../../../controller/Controller_categorys/zController_category/insertCategory.js"
 import { authAccess } from "../../../config/middleware/authAcces.js";


 routerInsertCategory.post('/category/cadastro', bodyJsonParser, authAccess("ADMIN") ,async (req,res) => {

    let contentType = req.headers['content-type']
    let dadosBody = req.body
    let resultCat = await insertCategory(dadosBody,contentType)

    return res.status(resultCat.status_code).json(resultCat)
 })

 export default routerInsertCategory