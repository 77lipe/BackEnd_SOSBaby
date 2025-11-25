import postSpecialty from './postSpecialty.js'
import getAllSpecialty from './getAllSpecialty.js'
import getAIdSpecialty from './getIdSpecialty.js'
import deleteSpecialty from './deleteSpecialty.js'

import { Router } from "express"

const router = Router()

router.use(postSpecialty)
router.use(getAIdSpecialty)
router.use(getAllSpecialty)
router.use(deleteSpecialty)


export default router