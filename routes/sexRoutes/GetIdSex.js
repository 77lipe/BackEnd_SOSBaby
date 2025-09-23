/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para GET ALL SEXOS
 ********************************************************/

import { Router } from "express";
import cors from 'cors'
const routerIdSex = Router()

import { SearchIDGender } from "../../controller/Controller_sexo/SelectByIdGender";

routerIdSex.get('/sex/:id', cors(), async (req, res) => {

    let id = req.params.id
    let resultIdSex = await SearchIDGender(id)

    return res.status(resultIdSex.status_code).json(resultIdSex)
})

export default routerIdSex