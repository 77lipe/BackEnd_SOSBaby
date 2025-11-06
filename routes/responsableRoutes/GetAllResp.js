/*********************************************************
 * Autor: Isabelly Lima
 * Date: 30/09/25
 * Versão: 2.0
 * Desc: App que irá realizar as 
 *       rotas para GET ALL RESPONSABLE
 ********************************************************/

import {Router} from "express"
import cors from 'cors'
const routerAllResponsable = Router()

import {ListAllResp} from "../../controller/Controller_responsable/ListAllResp.js";
import { authAccess } from "../../config/middleware/authAcces.js";

routerAllResponsable.get('/responsables', cors(), authAccess("ADMIN" || "Clínica") ,async(req, res) => {

   let resultAllResponsable = await ListAllResp()
   return res.status(resultAllResponsable.status_code).json(resultAllResponsable)
})

export default routerAllResponsable