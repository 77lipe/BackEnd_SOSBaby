/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para DELETE DO USER
 ********************************************************/

import {Router} from "express";
import cors from 'cors'

import { deleteUser } from "../../controller/Controller_user/deleteUser.js";
import { authAccess } from "../../config/middleware/authAcces.js";

const routerDeleteUser = Router()

routerDeleteUser.delete('/user/:id', cors(), authAccess("ADMIN"), async(req, res) => {

    let id = req.params.id
    let resultDeleteUser = await deleteUser(id)

    return res.status(resultDeleteUser.status_code).json(resultDeleteUser)
})

export default routerDeleteUser