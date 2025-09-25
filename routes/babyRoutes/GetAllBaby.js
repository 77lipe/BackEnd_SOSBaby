/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para GET ALL BABYS
 ********************************************************/

import {Router} from "express"
import cors from 'cors'
const routerAllBabys = Router()

import { selectAllBebe } from "../../controller/Controller_baby/selectAllBebe.js";

routerAllBabys.get('/babys', cors(), async(req, res) => {

    let resultAllBaby = await selectAllBebe()
    return res.status(resultAllBaby.status_code).json(resultAllBaby)
})

export default routerAllBabys