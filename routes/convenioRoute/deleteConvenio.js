import { Router } from "express"
import cors from 'cors'
const routerDeleteConvenio = Router()

import { deleteConvenio } from "../../controller/Controller_convenio/deleteConvenio.js"

routerDeleteConvenio.delete('/convenio/:id', cors(), async (req, res) => {

    let id = req.params.id
    let resultDelete = await deleteConvenio(id)

    return res.status(resultDelete.status_code).json(resultDelete)
})

export default routerDeleteConvenio
