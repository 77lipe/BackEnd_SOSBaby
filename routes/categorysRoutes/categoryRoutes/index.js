/*********************************************************
 * Autor: Felipe Vieira
 * Date: 16/10/25
 * Versão: 1.0
 * Desc: App que irá controlar as rotas de Categoria
 ********************************************************/

 import PostCategory from './PostCategory.js'
 import PutCategory from './PutCategory.js'
 import GetAllCategory from './GetAllCategory.js'
 import GetIdCategory from './GetIdCategory.js'
 import DeleteCategory from './DeleteCategory.js'
 import { Router } from "express"
 
 const router = Router()
 
 router.use(PostCategory)
 router.use(GetIdCategory)
 router.use(GetAllCategory)
 router.use(PutCategory)
 router.use(DeleteCategory)
 
 export default router