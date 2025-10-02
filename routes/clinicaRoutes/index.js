/*********************************************************
 * Autor: Eduardo
 * Date:02/10/25
 * Versão: 1.0
 * Desc: App que irá controlar as DA Clinica
 ********************************************************/

 import PostClinica from './PostClinica.js'
 import PutClinica from './PutClinica.js'
 import GetAllClinica from './GetAllClinica.js'
 import GetIdClinica from './GetIdClinica.js'
 import DeleteClinica from './DeleteClinica.js'
 import { Router } from "express"
 
 const router = Router()
 
 router.use(PostClinica)
 router.use(PutClinica)
 router.use(GetAllClinica)
 router.use(GetIdClinica)
 router.use(DeleteClinica)
 
 export default router