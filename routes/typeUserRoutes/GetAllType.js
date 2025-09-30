/*********************************************************
 * Autor: Isabelly Lima
 * Date: 30/09/25
 * Versão: 2.0
 * Desc: App que irá realizar as 
 *       rotas para GET ALL TYPE USER
 ********************************************************/

import {Router} from "express"
import cors from 'cors'
const routerAllTypeUser = Router()

import {SelectAllTypeUsers} from "../../controller/Controller_type_user/SelectAllUsers.js";

routerAllTypeUser.get('/type', cors(), async(req, res) => {

   let resultAllTypeUser = await SelectAllTypeUsers()
   return res.status(resultAllTypeUser.status_code).json(resultAllTypeUser)
})

export default routerAllTypeUser