/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para DELETE DO USER
 ********************************************************/

import express, {Router} from "express";
import bodyParser from "body-parser";
import cors from 'cors'

import { deleteUser } from "../../controller/Controller_user/deleteUser";

const routerDeleteUser = Router()

routerDeleteUser.get('/user/delete', cors(), async(req, res) => {

    let id = req.params.id
    let resultDeleteUser = await deleteUser(id)

    return res.status(resultDeleteUser.status_code).json(resultDeleteUser)
})

export default routerDeleteUser