/*********************************************************
 * Autor: Eduardo Nascimento
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para DELETE DA CLINICA
 ********************************************************/

 import {Router} from "express";
 import cors from 'cors'
 
 import {DeleteClinica} from "../../controller/Controller_Clinica/deleteClinica.js";
 
 const routerDeleteClinica = Router()
 
 routerDeleteClinica.delete('/specialty/:id', cors(), async(req, res) => {
 
     let id = req.params.id
     let resultDeleteClinica = await DeleteClinica(id)
 
     return res.status(resultDeleteClinica.status_code).json(resultDeleteClinica)
 })
 
 export default routerDeleteClinica