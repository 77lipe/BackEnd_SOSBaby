import PostVidelCall from './videoCallRoutes/postVideoCall.js'
import GetIdVideoCall from './videoCallRoutes/getVideoCall.js'
import DeleteVideoCall from './videoCallRoutes/deleteVideoCall.js'
import PostParticipant from './participantRoutes/postParcipant.js'
import { Router } from "express"

const router = Router()

router.use(PostParticipant)
router.use(PostVidelCall)
router.use(GetIdVideoCall)
router.use(DeleteVideoCall)

export default router