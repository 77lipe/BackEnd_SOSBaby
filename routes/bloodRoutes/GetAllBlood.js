/*********************************************************
 * Autor: Isabelly Lima
 * Date: 30/09/25
 * Versão: 2.0
 * Desc: App que irá realizar as 
 *       rotas para GET ALL BLOOD
 ********************************************************/

import {Router} from "express"
import cors from 'cors'
const routerAllBlood = Router()

import {SelectAllBlood} from "../../controller/Controller_blood/selectAllSangue.js";

routerAllBlood.get('/blood', cors(), async(req, res) => {

   let resultAllBlood = await SelectAllBlood()
   return res.status(resultAllBlood.status_code).json(resultAllBlood)
})

export default routerAllBlood