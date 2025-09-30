/*********************************************************
 * Autor: Isabelly Lima
 * Date:30/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para DELETE DO MÉDICO
 ********************************************************/

import {Router} from "express";
import cors from 'cors'

import {DeleteDoctor} from "../../controller/Controller_doctor/deleteDoctor.js";

const routerDeleteDoctor = Router()

routerDeleteDoctor.delete('/doctor/:id', cors(), async(req, res) => {

    let id = req.params.id
    let resultDeleteDoctor = await DeleteDoctor(id)

    return res.status(resultDeleteDoctor.status_code).json(resultDeleteDoctor)
})

export default routerDeleteDoctor