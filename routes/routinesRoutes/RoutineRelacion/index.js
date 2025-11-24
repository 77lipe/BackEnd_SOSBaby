
import PostRelacionamento from './postRelacionamentoRotina.js'
import GetRoutine from './viewRelacionaRotina.js'
//import GetAllRoutineResp from './GetAllRoutineResp.js'

import {Router} from "express"

const router = Router()

router.use(PostRelacionamento)
router.use(GetRoutine)
//router.use(GetAllRoutineResp)


export default router