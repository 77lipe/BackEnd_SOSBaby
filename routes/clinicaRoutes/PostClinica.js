/*********************************************************
 * Autor: Eduardo Nascimento
 * Date:02/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para POST CLINICA
 ********************************************************/

 import cors from 'cors'
 import bodyParser from 'body-parser'
 import express,{ Router } from 'express'
 const routerInsertClinica = Router()
 
 import {insertClinica} from "../../controller/Controller_Clinica/insertClinica.js"
 
 const bodyJsonParser = bodyParser.json()
 
 routerInsertClinica.post('/resp/cadastro', bodyJsonParser, async (req,res) =>{
     
     let contentType = req.headers['content-type']
     let dataClinica = req.body
 
     let resultInsertClinica = await insertClinica(dataClinica, contentType)
 
     return res.status(resultInsertClinica.status_code).json(resultInsertClinica)
 })
 
 export default routerInsertClinica
 
 