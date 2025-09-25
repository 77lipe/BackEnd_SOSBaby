/*********************************************************
 * Autor: Isabelly Lima
 * Date:  23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para GET ID DO TYPE USER
 ********************************************************/

import {Router} from "express"
import cors from 'cors'
const routerAllTypeUser = Router()

import {SelectAllUsers} from "../../controller/Controller_type_user/SelectAllUsers.js";

routerAllTypeUser.get('type/:id', cors(), async (req, res) => {

    let id = req.params.id
    let resultAllTypeUser = await SelectAllUsers (id)

    return res.status(resultAllTypeUser.status_code).json(resultAllTypeUser)
})

export default routerAllTypeUser