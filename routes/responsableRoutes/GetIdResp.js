/*********************************************************
 * Autor: Isabelly Lima
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para GET ID DO RESPONSÁVEL
 ********************************************************/

import {Router} from "express"
import cors from 'cors'
const routerIdResponsable = Router()

import {searchIDResp} from "../../controller/Controller_responsable/GetIdResp.js";

routerIdResponsable.get('/resp/:id', cors(), async (req, res) => {

    let id = req.params.id
    let resultIdResponsable = await searchIDResp(id)

    return res.status(resultIdResponsable.status_code).json(resultIdResponsable)
})

export default routerIdResponsable