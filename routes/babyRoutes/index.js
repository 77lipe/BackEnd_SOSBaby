/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá controlar as rotas de BEBÊ
 ********************************************************/

import PostBaby from './PostBaby'
import PutBaby from './PutBaby'
import GetAllBaby from './GetAllBaby'
import GetIdBaby from './GetIdBaby'
import DeleteBaby from './DeleteBaby'
import { Router } from "express"

const router = Router()

router.use(PostBaby)
router.use(GetIdBaby)
router.use(GetAllBaby)
router.use(PutBaby)
router.use(DeleteBaby)

export default router