/*********************************************************
 * Autor: Isabelly Lima
 * Date: 30/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para GET ALL DOCTOR
 ********************************************************/

import {Router} from "express"
import cors from 'cors'
const routerAllDoctor = Router()

import {getAllDoctor} from "../../controller/Controller_doctor/getAllDoctor.js"
import { authAccess } from "../../config/middleware/authAcces.js";

routerAllDoctor.get('/doctors', cors(), authAccess(["ADMIN", "Clínica", "Responsável"]), async(req, res) => {

   let resultAllDoctor = await getAllDoctor()
   return res.status(resultAllDoctor.status_code).json(resultAllDoctor)
})

export default routerAllDoctor