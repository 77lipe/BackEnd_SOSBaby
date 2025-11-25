import { Router } from "express"
import cors from "cors"
const routerGetAllConvenio = Router()

import { getAllConvenio } from "../../controller/Controller_convenio/getAllConvenio.js"

routerGetAllConvenio.get('/convenios', cors(), async (req, res) => {

    let resultView = await getAllConvenio()

    return res.status(resultView.status_code).json(resultView)
})

export default routerGetAllConvenio
