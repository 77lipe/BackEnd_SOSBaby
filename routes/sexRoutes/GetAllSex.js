/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para GET ALL SEXOS
 ********************************************************/

 import {Router} from "express"
 import cors from 'cors'
 const routerAllSex = Router()
 
 import { SelectAllGender } from "../../controller/Controller_sexo/LisAllGender";
 
 routerAllSex.get('/sexs', cors(), async(req, res) => {

    let resultAllSex = await SelectAllGender()
    return res.status(resultAllSex.status_code).json(resultAllSex)
 })
 
 export default routerAllSex