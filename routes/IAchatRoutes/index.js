/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá controlar as rotas de BEBÊ
 ********************************************************/

 import PostIA from './IAchatPost.js'
 import { Router } from "express"
 
 const router = Router()
 
 router.use(PostIA)

 export default router