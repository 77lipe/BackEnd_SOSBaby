/*********************************************************
 * Autor: Isabelly Lima
 * Date: 09/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para GET ID DO CALENDÁRIO
 ********************************************************/

import {Router} from "express"
import cors from 'cors'
const routerIdCalendario = Router()

import {GetIdCalendario} from "../../controller/Controller_calendario/GetIdCalen.js";

routerIdCalendario.get('/calender/:id', cors(), async (req, res) => {

    let id = req.params.id
    let resultIdCalendario = await GetIdCalendario(id)

    return res.status(resultIdCalendario.status_code).json(resultIdCalendario)
})

export default routerIdCalendario