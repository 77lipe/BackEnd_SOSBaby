/*********************************************************
 * Autor: Isabelly Lima
 * Date: 30/09/25
 * Versão: 1.0
 * Desc: App que irá controlar as DO DOCTOR
 ********************************************************/

import PostDoctor   from './PostDoctor.js'
import GetAllDoctor from './GetAllDoctor.js'
import GetIdDoctor  from './GetIdDoctor.js'
import DeleteDoctor from './DeleteDoctor.js'
import PutDoctor   from './PutDoctor.js'
import GetDoctorByUser   from './GetDoctorByUser.js'
import GetDoctorByEspecialidade   from './filterRoutes/filterDoctorByEspecialidade.js'
import GetDoctorByName   from './filterRoutes/filterNameDoctor.js'

import { Router }   from "express"

const router = Router()

router.use(PostDoctor)
router.use(PutDoctor)
router.use(GetAllDoctor)
router.use(GetIdDoctor)
router.use(DeleteDoctor)
router.use(GetDoctorByUser)
router.use(GetDoctorByEspecialidade)
router.use(GetDoctorByName)

export default router