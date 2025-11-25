import { Router } from "express"
import cors from "cors"

const routerDeleteEspecialidade = Router()

import { deleteEspecialidade } from "../../controller/Controller_Specialty/deleteSpecialty.js"

routerDeleteEspecialidade.delete('/especialidade/:id', cors(), async (req, res) => {

    let id = req.params.id
    let result = await deleteEspecialidade(id)

    return res.status(result.status_code).json(result)
})

export default routerDeleteEspecialidade
