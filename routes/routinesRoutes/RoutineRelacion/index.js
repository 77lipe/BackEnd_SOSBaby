
import PostRelacionamento from './postRelacionamentoRotina.js'
import GetRoutine from './viewRelacionaRotina.js'
import GetAllRoutine from './viewALLRelacionRotina.js'
import getUserRoutine from './getUserRoutine.js'
import deleteRoutineRelacionamento from './deleteRelacionamento.js'
//import GetAllRoutineResp from './GetAllRoutineResp.js'

import {Router} from "express"

const router = Router()

router.use(PostRelacionamento)
router.use(GetRoutine)
router.use(GetAllRoutine)
router.use(deleteRoutineRelacionamento)
router.use(getUserRoutine)
//router.use(GetAllRoutineResp)


export default router