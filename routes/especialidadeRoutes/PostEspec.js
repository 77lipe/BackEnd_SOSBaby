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
 const routerInsertEspec = Router()
 
 import {insertSangue} from "../../controller/Controller_especialidade/InsertEspecialidade.js"
 
 const bodyJsonParser = bodyParser.json()
 
 routerInsertEspec.post('/specialty/cadastro', bodyJsonParser, async (req,res) =>{
     
     let contentType = req.headers['content-type']
     let dataEspec = req.body
 
     let resultInsertEspec = await insertSangue(dataEspec, contentType)
 
     return res.status(resultInsertEspec.status_code).json(resultInsertEspec)
 })
 
 export default routerInsertEspec
 