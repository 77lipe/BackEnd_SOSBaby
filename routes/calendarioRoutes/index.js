/*********************************************************
 * Autor: Isabelly Lima
 * Date: 09/10/25
 * Versão: 1.0
 * Desc: App que irá controlar o CALENDÁRIO
 ********************************************************/

import PostCalendario from './PostCalendario.js'
import PutCalendario from './PutCalendario.js'
import GetAllCalendario from './GetAllCalendario.js'
import GetIdCalendario from './GetIdCalendario.js'
import DeleteCalendario from './DeleteCalendario.js'
import { Router } from "express"

const router = Router()

router.use(PostCalendario)
router.use(PutCalendario)
router.use(GetAllCalendario)
router.use(GetIdCalendario)
router.use(DeleteCalendario)

export default router