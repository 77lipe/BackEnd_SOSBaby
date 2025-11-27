import {Router} from 'express'
import bodyParser from 'body-parser'

const bodyJsonParser = bodyParser.json()
const routerFilterName = Router()
import { FilterDoctorByEspecialidade } from '../../../controller/Controller_filters/FilterDoctor/getDoctorBySpecialty.js'
import { authAccess} from '../../config/middleware/authAcces.js'

routerFilterName.post('/filter/EspDoctor', bodyJsonParser, authAccess(["Médico", "Clínica", "ADMIN"]),async (req, res) => {

    const contentType = req.headers['content-type']
    const dataName = req.body
    
    const result = await FilterDoctorByEspecialidade(dataName, contentType)
    return res.status(result.status_code).json(result)
})

export default routerFilterName