/*********************************************************
 * Autor: Isabelly Lima
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para DELETE DO RESPONSÁVEL
 ********************************************************/

import express, {Router} from "express";
import bodyParser from "body-parser";
import cors from 'cors'

import {DeleteResp} from "../../controller/Controller_responsable/DeleteResp.js";

const routerDeleteResponsable = Router()

routerDeleteResponsable.get('/resp/delete', cors(), async(req, res) => {

    let id = req.params.id
    let resultDeleteResponsable = await DeleteResp(id)

    return res.status(resultDeleteResponsable.status_code).json(resultDeleteResponsable)
})

export default routerDeleteResponsable