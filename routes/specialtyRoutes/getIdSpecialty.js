import { Router } from "express"
import cors from 'cors'

const routerGetIdEspecialidade = Router()

import { getEspecialidadeById } from "../../controller/Controller_Specialty/getIdSpecialty.js"

routerGetIdEspecialidade.get('/especialidade/:id', cors(), async (req, res) => {

    let id = req.params.id
    let result = await getEspecialidadeById(id)

    return res.status(result.status_code).json(result)
})

export default routerGetIdEspecialidade
