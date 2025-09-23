/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para POST USER
 ********************************************************/

import cors from 'cors'
import bodyParser from 'body-parser'
import express,{ Router } from 'express'
const router = Router()

import { insertUser } from "../../controller/Controller_user/insertUser.js"

const bodyJsonParser = bodyParser.json()

router.post('/user',cors(),bodyJsonParser, async (req,res)=>{
    let user = req.body

    let resultInsertUser = await insertUser(user,req.headers['content-type'])

    return res.status(resultInsertUser.status_code).json(resultInsertUser)
})

export default router

