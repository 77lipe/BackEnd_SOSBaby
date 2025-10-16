/*********************************************************
 * Autor: Felipe Vieira
 * Date:16/10/25
 * Versão: 1.0
 * Desc: App que irá controlar as rotas de BEBÊ
 ********************************************************/

 import PostSub from './PostSubCategory.js'
 import GetAllSub from './GetAllSubCategory.js'
 import GetIdSub from './GetIdSubCategory.js'
 import DeleteSub from './DeleteSubCategory.js'
 import { Router } from "express"
 
 const router = Router()
 
 router.use(PostSub)
 router.use(GetIdSub)
 router.use(GetAllSub)
 router.use(DeleteSub)
 
 export default router