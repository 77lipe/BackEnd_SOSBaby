/*********************************************************
 * Autor: Isabelly Lima
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para POST SANGUE
 ********************************************************/

import cors from 'cors'
import bodyParser from 'body-parser'
import express,{ Router } from 'express'
const routerInsertBlood = Router()

import {insertSangue} from "../../controller/Controller_blood/insertSangue.js"

const bodyJsonParser = bodyParser.json()

routerInsertBlood.post('/blood/cadastro', bodyJsonParser, async (req,res) =>{
    
    let contentType = req.headers['content-type']
    let dataBlood = req.body

    let resultInsertBlood = await insertSangue(dataBlood, contentType)

    return res.status(resultInsertBlood.status_code).json(resultInsertBlood)
})

export default routerInsertBlood
