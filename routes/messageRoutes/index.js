/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá controlar as rotas de MESSAGE
 ********************************************************/

import PostMessage from './postMessage.js'
import getIdMessage from './getIdMessage.js'
import getAllMessage from './getAllMessage.js'

import { Router } from "express"
const router = Router()

router.use(PostMessage)
router.use(getIdMessage)
router.use(getAllMessage)

export default router