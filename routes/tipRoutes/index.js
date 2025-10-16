/*********************************************************
 * Autor: Felipe Vieira
 * Date: 14/10/25
 * Versão: 1.0
 * Desc: App que irá controlar as Dicas
 ********************************************************/

import routerAllTip from './GetAllTip.js'
import routerIdTip from './GetIdTip.js'
import routerDeleteTip from './DeleteTip.js'
import routerPutTip from './PutTip.js'
import routerPostTip from './PostTip.js'
import { Router } from "express"

const router = Router()

router.use(routerPostTip)
router.use(routerPutTip)
router.use(routerAllTip)
router.use(routerIdTip)
router.use(routerDeleteTip)

export default router