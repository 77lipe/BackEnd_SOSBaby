/*********************************************************
 * Autor: Isabelly Lima
 * Date: 09/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para GET ALL CALENDÁRIO
 ********************************************************/

import {Router} from "express"
import cors from 'cors'
const routerAllCalendario = Router()

import {SelectAllCalendario} from "../../controller/Controller_calendario/ListAllCalen.js";

routerAllCalendario.get('/calenders', cors(), async(req, res) => {

   let resultAllCalendario = await SelectAllCalendario()
   return res.status(resultAllCalendario.status_code).json(resultAllCalendario)
})

export default routerAllCalendario