/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para DELETE DO BEBÊ
 ********************************************************/

import {Router} from "express"
import cors from 'cors'
const routerDeleteBaby = Router()

import { deleteBebe } from "../../controller/Controller_baby/deleteBebe";

routerDeleteBaby.delete('/baby/:id', cors(), async(req, res) => {

    let id = req.params.id
    let resultDeleteBaby = await deleteBebe(id)

    return res.status(resultDeleteBaby.status_code).json(resultDeleteBaby)
})

export default resultDeleteBaby