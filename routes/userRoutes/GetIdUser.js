/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para GET ID DO USER
 ********************************************************/

import {Router} from "express"
import cors from 'cors'
const routerIdUser = Router()

import { selectIDUser } from "../../controller/Controller_user/searchIdUser";

routerIdUser.get('user/:id', cors(), async (req, res) => {

    let id = req.params.id
    let resultIdUser = await selectIDUser(id)

    return res.status(resultIdUser.status_code).json(resultIdUser)
})

export default routerIdUser