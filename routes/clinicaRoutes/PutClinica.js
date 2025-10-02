/*********************************************************
 * Autor: Isabelly Lima
 * Date: 30/09/25
 * Versão: 2.0
 * Desc: App que irá realizar as 
 *       rotas para PUTT RESPONSABLE
 ********************************************************/

 import {Router} from 'express'
 import bodyParser from 'body-parser'
 import cors from 'cors'
 
 import {UpdateClinica} from '../../controller/Controller_Clinica/putClinica.js'
 
 const routerUpdateClinica = Router()
 const bodyJsonParser = bodyParser.json()
 
 routerUpdateClinica.put('/resp/:id', cors(), bodyJsonParser, async (req, res) => {
 
     let id = req.params.id
     let contentType = req.body['content-type']
     let dataClinica = req.body
 
     let resultClinica = await UpdateClinica ( id, dataClinica, contentType)
 
     return res.status(resultClinica.status_code).json(resultClinica)
 })
 
 export default routerUpdateClinica