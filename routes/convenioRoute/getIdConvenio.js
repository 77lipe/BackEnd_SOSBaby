import { Router } from "express"
import cors from 'cors'
const routerIdConvenio = Router()

import { getConvenioById } from "../../controller/Controller_convenio/getIdConvenio.js"

routerIdConvenio.get('/convenio/:id', cors(), async (req, res) => {

    let id = req.params.id
    let resultIdConvenio = await getConvenioById(id)

    return res.status(resultIdConvenio.status_code).json(resultIdConvenio)
})

export default routerIdConvenio
