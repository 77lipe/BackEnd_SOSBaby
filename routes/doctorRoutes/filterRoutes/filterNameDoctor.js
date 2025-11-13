/*********************************************************
 * Autor: Isabelly Lima
 * Date: 30/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para GET NAME MÉDICOS
 ********************************************************/

import { Router } from "express";
import bodyParser from "body-parser";

const routerNameDoctor = Router()
const bodyJsonParser = bodyParser.json()

import {filterNameDoctorController} from '../../../controller/Controller_doctor/filterController/filterNameDoctorController.js'

routerNameDoctor.post("/filter/names/doctors", bodyJsonParser, async (req, res) => {

    const contentType = req.headers['content-type']
    const dataBody = req.body

    const resultSearch = await filterNameDoctorController(dataBody, contentType)

    return res.status(resultSearch.status_code).json(resultSearch)
})

export default routerNameDoctor