/*********************************************************
 * Autor: Eduardo Nascimento
 * Date:02/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para GET ID DO Clinica
 ********************************************************/

 import express, {Router} from "express"
 import bodyParser from "body-parser"
 import cors from 'cors'
 const routerIdClinica = Router()
 
 import {searchIDClinica} from "../../controller/Controller_Clinica/getIdClinica.js";
 
 routerIdClinica.get('specialty/:id', cors(), async (req, res) => {
 
     let id = req.params.id
     let resultIdClinica = await searchIDClinica(id)
 
     return res.status(resultIdClinica.status_code).json(resultIdClinica)
 })
 
 export default routerIdClinica