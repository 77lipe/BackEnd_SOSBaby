/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá controlar as rotas de BEBÊ
 ********************************************************/

import PostBaby from './PostBaby.js'
import PutBaby from './PutBaby.js'
import GetAllBaby from './GetAllBaby.js'
import GetIdBaby from './GetIdBaby.js'
import DeleteBaby from './DeleteBaby.js'
import FilterBaby from './filterBaby.js'
import { Router } from "express"

const router = Router()

router.use(PostBaby)
router.use(GetIdBaby)
router.use(GetAllBaby)
router.use(PutBaby)
router.use(DeleteBaby)
router.use(FilterBaby)

export default router