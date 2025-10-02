/*********************************************************
 * Autor: Felipe Vieira
 * Date: 16/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para LOGIN do Usuário 
 ********************************************************/

import * as message from '../../config/status/status.js'
import { loginSQLUser } from "../../model/UserDAO/LoginUser.js"

export const loginUser = async function (user, contentType) {
    try {
        

      
        if (String(contentType).toLowerCase().includes('application/json')) {
            if (
                user.email == "" || user.email == undefined || user.email == null || user.email.length > 100  ||
                user.senha == "" || user.senha == undefined || user.senha == null || user.senha.length > 50
            ){
                return message.ERROR_REQUIRED_FIELDS
            }else{

                let resultUser = await loginSQLUser(user)
                if(resultUser != false || typeof(resultUser) == 'object'){
                    return {
                        ...message.SUCCES_LOGIN_COMPLETED,
                        data: resultUser    
                    }
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