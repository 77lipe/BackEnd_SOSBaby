/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá controlar as DO TYPE-USER
 ********************************************************/

import PostType from './PostType.js'
import GetAllType from './GetAllType.js'
import GetIdType from './GetIdType.js'
import DeleteType from './DeleteType.js'
import PutType from './PutType.js'
import { Router } from "express"

const router = Router()

router.use(PostType)
router.use(GetAllType)
router.use(GetIdType)
router.use(DeleteType)
router.use(PutType)

export default router