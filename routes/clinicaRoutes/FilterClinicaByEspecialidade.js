import {Router} from 'express'
import bodyParser from 'body-parser'

const bodyJsonParser = bodyParser.json()
const routerFilterName = Router()
import { FilterClinicByEspecialidade } from '../../controller/Controller_filters/FilterClinic/getClinicBySpecialty.js'
import { authAccess} from '../../config/middleware/authAcces.js'

routerFilterName.post('/filter/EspClinica', bodyJsonParser, authAccess(["Médico", "Clínica", "ADMIN", "Responsável"]),async (req, res) => {

    const contentType = req.headers['content-type']
    const dataName = req.body
    
    const result = await FilterClinicByEspecialidade(dataName, contentType)
    return res.status(result.status_code).json(result)
})

export default routerFilterName