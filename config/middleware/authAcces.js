/***********************
 * 
 * Autor: Felipe Vieira dos Santos
 * data: 04/11/2025
 * Desc: Arquivo que realiza o controle de acesso de cada Usuário
 * 
************************/

import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { searchIDTypeUser } from "../../controller/Controller_type_user/searchIdType.js";

dotenv.config()

export const authAccess = (rolesPermitidos) => {
  return async (req, res, next) => {
    try {

      const authHeader = req.headers.authorization

      if (!authHeader) {
        return res.status(401).json({ message: "Token não informado!" })
      }else{
        const token = authHeader.split(" ")[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        //console.log(rolesPermitidos);
        //console.log(decoded);

        const tipoUser = decoded.id_tipo
        const resultTipo = await searchIDTypeUser(tipoUser)
        //console.log(resultTipo);
        if(resultTipo){
          
          const tipoString = resultTipo.type[0].tipo
          if(tipoString.trim().toLowerCase() === rolesPermitidos.trim().toLowerCase()){
            console.log('Acesso permitido para:', tipoString)
            next()
          }else{
            return res.status(403).json({message:`Acesso negado para esse tipo de usuário`})
          }
        }

      }
    } catch (error) {
      console.error("Erro no middleware:", error)
      return res.status(401).json({ message: "Token inválido ou expirado!" })
    }
  }
}
