/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá controlar as DO SEXO
 ********************************************************/

import PostSex from './PostSex.js'
import GetAllSex from './GetAllSex.js'
import GetIdSex from './GetIdSex.js'
import DeleteSex from './DeleteSex.js'
import { Router } from "express"

const router = Router()

router.use(PostSex)
router.use(GetAllSex)
router.use(GetIdSex)
router.use(DeleteSex)

export default router