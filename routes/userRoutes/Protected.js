/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       rotas para POST USER
 ********************************************************/

import { Router } from "express";
import {authmiddle} from "../../config/middleware/auth.js"
import {authAccess} from "../../config/middleware/authAcces.js"

const routerProtected = Router()

routerProtected.get("/user/responsable", authmiddle, authAccess("Responsável"), (req, res) => {
    res.json({
        message: "Acesso permitido: Bem-Vindo User-Responsável"
    })
})

routerProtected.get("/user/medico", authmiddle, authAccess(["Médico", "Clínica"]), (req, res) => {
    res.json({
        message: "Acesso permitido: Bem-Vindo User-Médico/Clínica"
    })
})

routerProtected.get("/user/admin", authmiddle, authAccess("ADMIN"), (req, res) => {
    res.json({
        message: "Acesso permitido: Bem-Vindo ADMIN"
    })
})

export default routerProtected