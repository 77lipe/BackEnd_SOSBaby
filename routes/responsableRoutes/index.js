/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá controlar as DO RESPONSAVEL
 ********************************************************/

import PostResponsable from './PostResp.js'
import PutResponsable from './PutResp.js'
import GetAllResponsable from './GetAllResp.js'
import GetIdResponsable from './GetIdResp.js'
import DeleteResponsable from './DeleteResp.js'
import FilterResponsable from './FilterResp.js'
import GetResponsableByUser from './GetRespByUser.js'
import { Router } from "express"

const router = Router()

router.use(PostResponsable)
router.use(PutResponsable)
router.use(GetAllResponsable)
router.use(GetIdResponsable)
router.use(DeleteResponsable)
router.use(FilterResponsable)
router.use(GetResponsableByUser)

export default router