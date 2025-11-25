import postConvenio from './postConvenio.js'
import getAllConvenio from './getAllConvenio.js'
import getAIdConvenio from './getIdConvenio.js'
import deleteConvenio from './deleteConvenio.js'

import { Router } from "express"

const router = Router()

router.use(postConvenio)
router.use(getAIdConvenio)
router.use(getAllConvenio)
router.use(deleteConvenio)


export default router