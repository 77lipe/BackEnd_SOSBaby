/*********************************************************
 * Autor: Isabelly Lima
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para GET ID DO SANGUE
 ********************************************************/

import express, {Router} from "express"
import bodyParser from "body-parser"
import cors from 'cors'
const routerAllBlood = Router()

import {selectAllBlood} from "../../controller/Controller_blood/selectAllSangue.js";

routerAllBlood.get('blood/:id', cors(), async (req, res) => {

    let id = req.params.id
    let resultAllBlood = await selectAllBlood (id)

    return res.status(resultAllBlood.status_code).json(resultAllBlood)
})

export default routerAllBlood