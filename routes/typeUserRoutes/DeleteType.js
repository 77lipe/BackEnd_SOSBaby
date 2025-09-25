/*********************************************************
 * Autor: Isabelly Lima
 * Date:  23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para DELETE DO TYPE USER
 ********************************************************/

import {Router} from "express";
import cors from 'cors'

import {DeleteTypeUser} from "../../controller/Controller_type_user/DeleteTypeUser.js";

const routerDeleteTypeUser = Router()

routerDeleteTypeUser.delete('/type/:id', cors(), async(req, res) => {

    let id = req.params.id
    let resultDeleteTypeUser = await DeleteTypeUser(id)

    return res.status(resultDeleteTypeUser.status_code).json(resultDeleteTypeUser)
})

export default routerDeleteTypeUser