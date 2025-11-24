
import PostRelacionamento from './postRelacionamentoRotina.js'
import GetRoutine from './viewRelacionaRotina.js'
import GetAllRoutine from './viewALLRelacionRotina.js'
//import GetAllRoutineResp from './GetAllRoutineResp.js'

import {Router} from "express"

const router = Router()

router.use(PostRelacionamento)
router.use(GetRoutine)
router.use(GetAllRoutine)
//router.use(GetAllRoutineResp)


export default router