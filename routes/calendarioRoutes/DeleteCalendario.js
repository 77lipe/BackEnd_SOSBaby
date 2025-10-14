/*********************************************************
 * Autor: Isabelly Lima
 * Date: 09/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para DELETE DO CALENDÁRIO
 * ******************************************************/

import {Router} from "express";
import cors from 'cors'

import {deleteCalendario} from "../../controller/Controller_calendario/DeleteCalen.js";

const routerDeleteCalendario = Router()

routerDeleteCalendario.delete('/calender/:id', cors(), async(req, res) => {

    let id = req.params.id
    let resultDeleteCalendario= await deleteCalendario(id)

    return res.status(resultDeleteCalendario.status_code).json(resultDeleteCalendario)
})

export default routerDeleteCalendario