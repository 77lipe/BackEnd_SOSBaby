/*********************************************************
 * Autor: Isabelly Lima
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para DELETE DO SANGUE
 ********************************************************/

import express, {Router} from "express";
import bodyParser from "body-parser";
import cors from 'cors'

import {DeleteBlood} from "../../controller/Controller_blood/deleteSangue.js";

const routerDeleteBlood = Router()

routerDeleteBlood.get('/blood/delete', cors(), async(req, res) => {

    let id = req.params.id
    let resultDeleteBlood = await DeleteBlood(id)

    return res.status(resultDeleteBlood.status_code).json(resultDeleteBlood)
})

export default routerDeleteBlood