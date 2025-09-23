/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para POST USER
 ********************************************************/

import {Router} from "express";
import bodyParser from "body-parser";
const routerUpdateBaby = Router()

import { updateBebe } from "../../controller/Controller_baby/updateBebe";

routerUpdateBaby.put('/baby/:id', bodyParser, async (req, res) => {

    let id = req.params.id
    let contentType = req.headers['content-type']
    let dadosBaby = req.body

    let resultUpdateBaby = await updateBebe(id, dadosBaby, contentType)
    return res.status(resultUpdateBaby.status_code).json(resultUpdateBaby)
})

export default routerUpdateBaby