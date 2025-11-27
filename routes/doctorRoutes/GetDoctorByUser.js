import {Router} from "express"
import cors from 'cors'
const routerIdDoctor = Router()

import {getDoctorByUser} from "../../controller/Controller_doctor/getIdDoctorByUser.js";
import { authAccess } from "../../config/middleware/authAcces.js";

routerIdDoctor.get('/doctorByUser/:id', cors(), authAccess(["ADMIN", "Clínica", "Responsável"]), async (req, res) => {

    let id = req.params.id
    let resultIdDoctor= await getDoctorByUser(id)

    return res.status(resultIdDoctor.status_code).json(resultIdDoctor)
})

export default routerIdDoctor