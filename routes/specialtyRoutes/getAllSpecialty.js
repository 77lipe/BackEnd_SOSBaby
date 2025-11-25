import { Router } from "express"
import cors from "cors"

const routerGetAllEspecialidade = Router()

import { getAllEspecialidades } from "../../controller/Controller_Specialty/getAllSpecialty.js"

routerGetAllEspecialidade.get('/especialidades', cors(), async (req, res) => {

    let result = await getAllEspecialidades()

    return res.status(result.status_code).json(result)
})

export default routerGetAllEspecialidade
