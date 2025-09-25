/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para DELETE DO BEBÊ
 ********************************************************/

import { Router } from "express";
import cors from 'cors'
const routerDeleteSex = Router()

import {DeleteGender} from '../../controller/Controller_sexo/DeleteGender.js'

routerDeleteSex.delete('/sex/:id', cors(), async (req, res) => {

    let id = req.params.id
    let resultDeleteSex = await DeleteGender(id)

    return res.status(resultDeleteSex.status_code).json(resultDeleteSex)
})

export default routerDeleteSex