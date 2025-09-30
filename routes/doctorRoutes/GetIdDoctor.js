/*********************************************************
 * Autor: Isabelly Lima
 * Date: 30/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para GET ID DO DOCTOR
 ********************************************************/

import express, {Router} from "express"
import bodyParser from "body-parser"
import cors from 'cors'
const routerIdDoctor = Router()

import {searchIdDoctor} from "../../controller/Controller_doctor/getIdDoctor.js";

routerIdDoctor.get('doctor/:id', cors(), async (req, res) => {

    let id = req.params.id
    let resultIdDoctor= await searchIdDoctor(id)

    return res.status(resultIdDoctor.status_code).json(resultIdDoctor)
})

export default routerIdDoctor