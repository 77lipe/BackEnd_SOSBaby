/*********************************************************
 * Autor: Felipe Vieira
 * Date: 16/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para LOGIN do Usuário 
 ********************************************************/

import jwt from "jsonwebtoken"
import * as message from '../../config/status/status.js'
import { loginSQLUser } from "../../model/UserDAO/LoginUser.js"
import { idTypeUser } from "../../model/TypeUserDAO/SelectByIdTypeUser.js";

export const loginUser = async function (user, contentType) {
    try {
    
        let dataJson = {}
      
        if (String(contentType).toLowerCase().includes('application/json')) {
            if (
                user.email   == "" || user.email   == undefined || user.email   == null || user.email.length > 100 || !user.email.match(/^[^\s@'"]+@[^\s@'"]+\.[^\s@'"]+$/) ||
                user.senha   == "" || user.senha   == undefined || user.senha   == null || user.senha.length > 100 || user.senha.match(/['"]/)
            ){
                return message.ERROR_REQUIRED_FIELDS
            }else{

                let resultUser = await loginSQLUser(user)
                if(resultUser != false || typeof(resultUser) == 'object'){
                    //console.log(resultUser);

                    const token = jwt.sign(
                        {
                            id_user: resultUser.id_user,
                            id_tipo: resultUser.id_tipo    
                        },
                        process.env.JWT_SECRET,
                        {expiresIn: "7d"}
                    )
                    //console.log("Payload decodificado:", jwt.decode(token))


                    let dadosType = await idTypeUser(resultUser.id_tipo)
                    resultUser.tipo_user = dadosType[0].tipo
                    delete resultUser.id_tipo

                    dataJson.message = message.SUCCES_LOGIN_COMPLETED.message
                    dataJson.status_code = message.SUCCES_LOGIN_COMPLETED.status_code
                    dataJson.data = resultUser
                    dataJson.token = token
                    //console.log(dataJson)

                    return dataJson 
                }else{
                    return message.ERROR_INTERNAL_SERVER_MODEL
                }
            }
        }else{
            return message.ERROR_CONTENT_TYPE
        }

    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}