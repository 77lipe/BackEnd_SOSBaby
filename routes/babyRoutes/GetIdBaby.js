/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para POST BABY
 ********************************************************/

import {Router} from "express";
import cors from 'cors'
const routerIdBaby = Router()

import { selectIdBebe } from "../../controller/Controller_baby/SelectIdBebe";

routerIdBaby.get('/babys', cors(), async (req, res) => {

    let id = req.params.id
    let resultIdBaby = await selectIdBebe(id)

    return res.status(resultIdBaby.status_code).json(resultIdBaby)
})

export default routerIdBaby