/*********************************************************
 * Autor: Isabelly Lima
 * Date: 30/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para GET ID DO DOCTOR
 ********************************************************/

import {Router} from "express"
import cors from 'cors'
const routerIdDoctor = Router()

import {getIdDoctor} from "../../controller/Controller_doctor/getIdDoctor.js";

routerIdDoctor.get('doctor/:id', cors(), async (req, res) => {

    let id = req.params.id
    let resultIdDoctor= await getIdDoctor(id)

    return res.status(resultIdDoctor.status_code).json(resultIdDoctor)
})

export default routerIdDoctor