/*********************************************************
 * Autor: Isabelly Lima
 * Date: 09/10/25
 * Versão: 1.0
 * Desc: App que irá controlar o CALENDÁRIO
 ********************************************************/

import PostCalendario from './PostCalendario'
import PutCalendario from './PutCalendario'
import GetAllCalendario from './GetAllCalendario'
import GetIdCalendario from './GetIdCalendario'
import DeleteCalendario from './DeleteCalendario'
import { Router } from "express"

const router = Router()

router.use(PostCalendario)
router.use(PutCalendario)
router.use(GetAllCalendario)
router.use(GetIdCalendario)
router.use(DeleteCalendario)

export default router