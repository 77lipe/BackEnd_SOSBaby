/*********************************************************
 * Autor: Eduardo Nascimento
 * Date: 02/10/25
 * Versão: 2.0
 * Desc: App que irá realizar as 
 *       rotas para GET ALL Especialidade
 ********************************************************/

 import {Router} from "express"
 import cors from 'cors'
 const routerAllEspec = Router()
 
 import {selectAllEspec} from "../../controller/Controller_especialidade/ListAllEspecialidade.js";
 
 routerAllEspec.get('/specialty', cors(), async(req, res) => {
 
    let resultAllEspec = await selectAllEspec()
    return res.status(resultAllEspec.status_code).json(resultAllEspec)
 })
 
 export default routerAllEspec