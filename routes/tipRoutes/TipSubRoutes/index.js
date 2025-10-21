/*********************************************************
 * Autor: Felipe Vieira
 * Date: 14/10/25
 * Versão: 1.0
 * Desc: App que irá controlar o relacionamento Dica-Subcategoria
 ********************************************************/

import routerGetTipBySub from './GetTipBySub.js'
import routerDeleteTipSub from './DeleteTipSub.js'
import routerGetAllTipSub from './GetAllTipSub.js'
import routerPostTipSub from './PostTipSub.js'
import routerPutTipSub from './PutTipSub.js'
import routerGetIdTipSub from './GetIdTipSub.js'
import routerGetSubByTip from './GetSubByTip.js'

import { Router } from "express"
const router = Router()

router.use(routerGetTipBySub)
router.use(routerDeleteTipSub)
router.use(routerGetAllTipSub)
router.use(routerPostTipSub)
router.use(routerPutTipSub)
router.use(routerGetIdTipSub)
router.use(routerGetSubByTip)

export default router