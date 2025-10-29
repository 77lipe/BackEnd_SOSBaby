/***********************
 * 
 * 
 * 
 * 
************************/

import jwt from "jsonwebtoken"
import * as message from "../status/status.js"

export const authAccess = (rolesPermitidos = []) => {
  return (req, res, next) => {
    try {
      const authHeader = req.headers.authorization

      if (!authHeader) {
        return res.status(401).json({ message: "Token não informado!" })
      }

      // Exemplo: "Bearer eyJhbGciOiJIUzI1..."
      const token = authHeader.split(" ")[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)


      console.log(rolesPermitidos);
      console.log(decoded);
    

      // decoded contém { id_user, type, iat, exp }
      req.user = decoded // guarda o payload no req

      // se tiver restrição de tipo (role)
      if (rolesPermitidos.length > 0 && !rolesPermitidos.includes(decoded.id_tipo)) {
        return res.status(403).json({ message: `Acesso negado para esse tipo de usuário: ${req.user} `})
      }

      next()
    } catch (error) {
      console.error("Erro no middleware:", error)
      return res.status(401).json({ message: "Token inválido ou expirado!" })
    }
  }
}
