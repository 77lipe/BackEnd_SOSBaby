/*********************************************************
 * Autor: Isabelly Lima
 * Date: 02/10/2025
 * Versão: 1.0
 * Desc: App que irá controlar os itens da rotina.
 ********************************************************/

import PostRoutineItem from './PostRoutine.js'
import GetAllRoutineItem from './GetAllRoutine.js'
import GetIdRoutineItem from './GetIdRoutine.js'
import DeleteRoutineItem from './DeleteRoutine.js'
import PutRoutineItem from './PutRoutine.js'
import {Router} from "express"

const router = Router()

router.use(PostRoutineItem)
router.use(GetAllRoutineItem)
router.use(GetIdRoutineItem)
router.use(DeleteRoutineItem)
router.use(PutRoutineItem)

export default router