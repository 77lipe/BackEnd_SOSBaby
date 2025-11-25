import bodyParser from 'body-parser'
import { Router } from 'express'

const routerInsertConvenio = Router()
const bodyJsonParser = bodyParser.json()

import { insertConvenio } from "../../controller/Controller_convenio/insertConvenio.js"

routerInsertConvenio.post('/convenio/cadastro', bodyJsonParser, async (req, res) => {

    let contentType = req.headers['content-type']
    let dataConvenio = req.body

    let resultInsertConvenio = await insertConvenio(dataConvenio, contentType)

    return res.status(resultInsertConvenio.status_code).json(resultInsertConvenio)
})

export default routerInsertConvenio
