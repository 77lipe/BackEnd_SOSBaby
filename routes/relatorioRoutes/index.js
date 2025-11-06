/*********************************************************
 * Autor: Isabelly Lima
 * Date: 06/11/25
 * Versão: 1.0
 * Desc: App que irá controlar as 
 *       rotas DO RELATÓRIO
 ********************************************************/

import PostRelatorio from './PostRelatorio.js'
import PutRelatorio from './PutRelatorio.js'
import GetAllRelatorio from './GetAllRelatorio.js'
import GetIdRelatorio from './GetIdRelatorio.js'
import DeleteRelatorio from './DeleteRelatorio.js'
import { Router } from "express"

const router = Router()

router.use(PostRelatorio)
router.use(GetIdRelatorio)
router.use(GetAllRelatorio)
router.use(PutRelatorio)
router.use(DeleteRelatorio)

export default router