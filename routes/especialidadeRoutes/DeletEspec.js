/*********************************************************
 * Autor: Eduardo Nascimento
 * Date:02/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para DELETE DE ESPECIALIDADE
 ********************************************************/

 import {Router} from "express";

 import cors from 'cors'
 
 import {DeleteEspec} from "../../controller/Controller_especialidade/DeleteEspecialidade.js";
 
 const routerDeleteEspec = Router()
 
 routerDeleteEspec.delete('/specialty/:id', cors(), async(req, res) => {
 
     let id = req.params.id
     let resultDeleteEspec = await DeleteEspec(id)
 
     return res.status(resultDeleteEspec.status_code).json(resultDeleteEspec)
 })
 
 export default routerDeleteEspec