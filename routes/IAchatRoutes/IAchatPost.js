/*********************************************************
 * Autor: Felipe Vieira
 * Date:04/11/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para CHAT COM IA 
 ********************************************************/

 import {Router} from "express"
 import bodyParser from "body-parser"
 const routerChatIA = Router()
 
 const bodyJsonParser = bodyParser.json()

 import {  } from "module";

 routerChatIA.post("/ia/generate", async (req, res) => {
    try {
         
        const userText = req.body.text
        const resultReqUser = await  
    } catch (error) {
         
    }
 })