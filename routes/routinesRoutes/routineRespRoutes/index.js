/********************************************************************
 * Autor: Isabelly Lima
 * Date:  02/10/2025
 * Versão: 1.0
 * Desc: App que irá controlar as rotinas criadas pelo responsável
 *******************************************************************/

import PostRoutineResp from './PostRoutineResp.js'
import GetAllRoutineResp from './GetAllRoutineResp.js'
import GetIdRoutineResp from './GetIdRoutineResp.js'
import DeleteRoutineResp from './DeleteRoutineResp.js'
import PutRoutineResp from './PutRoutineResp.js'
import {Router} from "express"

const router = Router()

router.use(PostRoutineResp)
router.use(GetAllRoutineResp)
router.use(GetIdRoutineResp)
router.use(DeleteRoutineResp)
router.use(PutRoutineResp)

export default router