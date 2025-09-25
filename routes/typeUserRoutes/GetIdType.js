/*********************************************************
 * Autor: Isabelly Lima
 * Date:  23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para GET ID DO TYPE USER
 ********************************************************/

import {Router} from "express"
import cors from 'cors'
const routerIdTypeUser = Router()

import {searchIDTypeUser} from "../../controller/Controller_type_user/searchIdType.js";

routerIdTypeUser.get('type/:id', cors(), async (req, res) => {

    let id = req.params.id
    let resultIdTypeUser = await searchIDTypeUser(id)

    return res.status(resultIdTypeUser.status_code).json(resultIdTypeUser)
})

export default routerIdTypeUser