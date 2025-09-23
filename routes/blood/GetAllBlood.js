/*********************************************************
 * Autor: Isabelly Lima
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para GET ID DO USER
 ********************************************************/

import express, {Router} from "express"
import bodyParser from "body-parser"
import cors from 'cors'
const routerAllBlood = Router()

import {selectAllBlood} from "../../controller/Controller_blood/selectAllSangue";

routerAllBlood.get('blood/:id', cors(), async (req, res) => {

    let id = req.params.id
    let resultIdBlood = await selectIDBlood (id)

    return res.status(resultIdBlood.status_code).json(resultIdBlood)
})

export default routerIdBlood