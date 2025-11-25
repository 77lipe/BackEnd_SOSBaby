import bodyParser from 'body-parser'
import { Router } from 'express'

const routerInsertEspecialidade = Router()
const bodyJsonParser = bodyParser.json()

import { insertEspecialidade } from "../../controller/Controller_Specialty/insertSpecialty.js"

routerInsertEspecialidade.post('/especialidade/cadastro', bodyJsonParser, async (req, res) => {

    let contentType = req.headers['content-type']
    let data = req.body

    let resultInsert = await insertEspecialidade(data, contentType)

    return res.status(resultInsert.status_code).json(resultInsert)
})

export default routerInsertEspecialidade
