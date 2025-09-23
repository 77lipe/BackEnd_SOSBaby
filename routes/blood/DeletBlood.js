/*********************************************************
 * Autor: Isabelly Lima
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para DELETE DO USER
 ********************************************************/

import express, {Router} from "express";
import bodyParser from "body-parser";
import cors from 'cors'

import {deleteBlood} from "../../controller/Controller_blood/deleteSangue";

const routerDeleteBlood = Router()

routerDeleteBlood.get('/blood/delete', cors(), async(req, res) => {

    let id = req.params.id
    let resultDeleteBlood = await deleteBlood(id)

    return res.status(resultDeleteBlood.status_code).json(resultDeleteBlood)
})

export default routerDeleteBlood