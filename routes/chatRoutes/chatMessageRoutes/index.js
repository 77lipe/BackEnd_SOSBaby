/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/10/25
 * Versão: 1.0
 * Desc: App que irá controlar as rotas de BEBÊ
 ********************************************************/

import GetAllChatMessage from './getAllChatMessage.js'
import GetIdChatMessage from "./getIdChatMessage.js"
import routerPostChatMessage from './postChatMessage.js'

import { Router } from "express"
const router = Router()

router.use(routerPostChatMessage)
router.use(GetIdChatMessage)
router.use(GetAllChatMessage)

export default router