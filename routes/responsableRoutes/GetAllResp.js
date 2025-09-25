/*********************************************************
 * Autor: Isabelly Lima
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para GET ID DO RESPONSÁVEL
 ********************************************************/

import express, {Router} from "express"
import bodyParser from "body-parser"
import cors from 'cors'
const routerAllResp = Router()

import {ListAllResp} from "../../controller/Controller_responsable/ListAllResp.js";

routerAllResp.get('resp/:id', cors(), async (req, res) => {

    let id = req.params.id
    let resultAllResp = await ListAllResp (id)

    return res.status(resultAllResp.status_code).json(resultAllResp)
})

export default routerAllResp