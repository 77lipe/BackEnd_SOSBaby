/*********************************************************
 * Autor: Eduardo Nascimento
 * Date: 02/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para GET ID DE ESPECIALIDADE
 ********************************************************/

 import express, {Router} from "express"
 import bodyParser from "body-parser"
 import cors from 'cors'
 const routerIdEspec = Router()
 
 import {SelectIdEspec} from "../../controller/Controller_especialidade/GetIdEspecialidade.js";
 
 routerIdEspec.get('specialty/:id', cors(), async (req, res) => {
 
     let id = req.params.id
     let resultIdEspec = await SelectIdEspec (id)
 
     return res.status(resultIdEspec.status_code).json(resultIdEspec)
 })
 
 export default routerIdEspec