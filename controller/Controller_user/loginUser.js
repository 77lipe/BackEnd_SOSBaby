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
        

        let dadosLogin = {}
        if (String(contentType).toLocaleLowerCase == 'application/json') {
            if (
                user.email == "" || user.email == undefined || user.email == null || user.email > 100  ||
                user.senha == "" || user.senha == undefined || user.senha == null || user.senha > 50
            ){
                return message.ERROR_REQUIRED_FIELDS
            }else{

                let resultUser = await loginSQLUser(user)
                if(resultUser != false || typeof(resultUser) == 'object'){
                    if (resultUser.length > 0) {
                        dadosLogin.message = message.SUCCES_LOGIN_COMPLETED
                        dadosLogin.user = resultUser

                        return dadosLogin
                    }
                    return message.ERROR_NOT_FOUND
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