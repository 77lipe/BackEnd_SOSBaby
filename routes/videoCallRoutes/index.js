/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá controlar as rotas de BEBÊ
 ********************************************************/

 import SolicitedTokenCall from './solicitedCall.js'
 import { Router } from "express"
 
 const router = Router()
 
 router.use(SolicitedTokenCall)
 
 export default router