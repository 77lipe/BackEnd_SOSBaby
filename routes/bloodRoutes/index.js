/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá controlar as rotas de Sangue
 ********************************************************/

import PostBlood from './PostBlood.js'
import GetAllBlood from './GetAllBlood.js'
import GetIdBlood from './GetIdBlood.js'
import DeleteBlood from './DeletBlood.js'
import { Router } from "express"

const router = Router()

router.use(PostBlood)
router.use(GetAllBlood)
router.use(GetIdBlood)
router.use(DeleteBlood)



export default router