/*********************************************************
 * Autor: Eduardo Nascimento 
 * Date: 30/09/25
 * Versão: 2.0
 * Desc: App que irá realizar as 
 *       rotas para GET ALL Clinica
 ********************************************************/

 import {Router} from "express"
 import cors from 'cors'
 const routerAllClinica = Router()
 
 import {SelectAllClinica} from "../../controller/Controller_Clinica/getAllClinica.js";
 
 routerAllClinica.get('/specialty', cors(), async(req, res) => {
 
    let resultAllClinica = await SelectAllClinica()
    return res.status(resultAllClinica.status_code).json(resultAllClinica)
 })
 
 export default routerAllClinica