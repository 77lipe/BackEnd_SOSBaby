
import PostRelacionamento from './postRelacionamentoRotina.js'
//import GetAllRoutineResp from './GetAllRoutineResp.js'

import {Router} from "express"

const router = Router()

router.use(PostRelacionamento)
//router.use(GetAllRoutineResp)


export default router