/*********************************************************
 * Autor: Isabelly Lima
 * Date: 23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para GET ID DO SANGUE
 ********************************************************/

import express, {Router} from "express"
import bodyParser from "body-parser"
import cors from 'cors'
const routerIdBlood = Router()

import {SelectIdBlood} from "../../controller/Controller_blood/selectIDSangue.js";

routerIdBlood.get('/blood/:id', cors(), async (req, res) => {

    let id = req.params.id
    let resultIdBlood = await SelectIdBlood (id)

    return res.status(resultIdBlood.status_code).json(resultIdBlood)
})

export default routerIdBlood