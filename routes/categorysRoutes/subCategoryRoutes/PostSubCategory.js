/*********************************************************
 * Autor: Felipe Vieira
 * Date: 16/10/25
 * Versão: 1.0
 * Desc: App que irá realizar a 
 *       rota para POST Sub Categoria
 ********************************************************/

import { Router } from "express"
import bodyParser from "body-parser"
const routerInsertSub = Router()

const bodyJsonParser = bodyParser.json()
import { insertCategory} from "../../../controller/Controller_categorys/zController_subcategory/insertSubCategory.js"
import { authAccess } from "../../../config/middleware/authAcces.js";


routerInsertSub.post('/subcategory/cadastro', bodyJsonParser, authAccess("ADMIN") ,async (req, res) =>{

    let contentType = req.headers['content-type']
    let dadosBody = req.body

    let resultInsertSub = await insertCategory(dadosBody, contentType)
    return res.status(resultInsertSub.status_code).json(resultInsertSub)
})

export default routerInsertSub