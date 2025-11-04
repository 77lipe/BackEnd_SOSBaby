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

 import { InitChat } from "../../config/geminiIA/start-Gemini.js";
import { authAccess } from "../../config/middleware/authAcces.js";

 routerChatIA.post("/ia/generate", bodyJsonParser, authAccess("Responsável"), async (req, res) => {
    try {
         
        const contentType = req.headers['content-type']
        const question = req.body.question

        const resultReqUser = await InitChat({question}, contentType)
        return res.status(resultReqUser.status_code).json(resultReqUser)

    } catch (error) {
        console.log(error);
    }
 })

 export default routerChatIA