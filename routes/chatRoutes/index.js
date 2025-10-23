/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/10/25
 * Versão: 1.0
 * Desc: App que irá controlar as rotas de CHAT
 ********************************************************/

import PostChat from './postChat.js'
import GetIdChat from './getIdChat.js'
import GetAllChat from './getAllChat.js'

import { Router } from "express"
const router = Router()

router.use(PostChat)
router.use(GetIdChat)
router.use(GetAllChat)

export default router