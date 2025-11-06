/*********************************************************
 * Autor: Isabelly Lima
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para DELETE DO SANGUE
 ********************************************************/

import {Router} from "express";

import cors from 'cors'

import {DeleteBlood} from "../../controller/Controller_blood/deleteSangue.js";
import { authAccess } from "../../config/middleware/authAcces.js";


const routerDeleteBlood = Router()

routerDeleteBlood.delete('/blood/:id', cors(), authAccess("ADMIN") ,async(req, res) => {

    let id = req.params.id
    let resultDeleteBlood = await DeleteBlood(id)

    return res.status(resultDeleteBlood.status_code).json(resultDeleteBlood)
})

export default routerDeleteBlood