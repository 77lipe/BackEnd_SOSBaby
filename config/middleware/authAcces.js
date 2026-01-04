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
import { selectIDUser } from "../../controller/Controller_user/searchIdUser.js";

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
        console.log(rolesPermitidos);
        console.log(decoded);

        const IdUser = decoded.id_user
        const resultUser = await selectIDUser(IdUser)
        //console.log(resultUser);
        if(resultUser){

          const tipoUser = decoded.id_tipo
          const resultTipo = await searchIDTypeUser(tipoUser)
          //console.log(resultTipo);
          if(resultTipo){
          
          const tipoString = resultTipo.type[0].tipo
          const roles = Array.isArray(rolesPermitidos)
        ? rolesPermitidos
        : [rolesPermitidos]

          if (roles.map(r => r.trim().toLowerCase()).includes(tipoString.toLowerCase())) {
            console.log('✅ Acesso permitido para:', tipoString)
            console.log('ℹ️ Info do usuário:', {
            id_user: resultUser.usuario[0].id_user,
            nome_user: resultUser.usuario[0].nome_user
        })

            req.user = {
              id_user: resultUser.usuario[0].id_user,
              nome_user: resultUser.usuario[0].nome_user
            }
          
            next()
          }else{
            return res.status(403).json({message:`Acesso negado para esse tipo de usuário: ${tipoString}`})
          }
        }
        }
        

      }
    } catch (error) {
      console.error("Erro no middleware:", error)
      return res.status(401).json({ message: "Token inválido ou expirado!" })
    }
  }
}
