/*********************************************************
 * Autor: Felipe Vieira
 * Date: 16/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para LOGIN do Usuário 
 ********************************************************/

import * as message from '../../../config/status/status.js'
import { updateUserPassword } from '../../../model/UserDAO/recuperarSenhaDAO/PutPassawordUser.js'

import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'

dotenv.config()

export const resetPassword = async function ( data, contentType){
    try {
     
        if(String(contentType).toLocaleLowerCase() == 'application/json'){
            if(
                data.code    == null ||  data.code    == undefined ||  data.code    == ''  ||
                data.token   == null || data.token    == undefined ||  data.token   == ''  ||
                data.newPass == null ||  data.newPass == undefined ||  data.newPass == ''
            ){
                return message.ERROR_REQUIRED_FIELDS
            }else{
                try {
                    
                    const decode = jwt.decode(data.token)
                    const resultCode = data.code
                    if(resultCode){

                        const userId = decode.id_user
                        const result = await updateUserPassword({userId, newPass: data.newPass})
                        if(result){
                            return{
                                ...message.SUCCES_PASSWORD_RESET,
                                nova_senha: data.newPass
                            }
                        }else{
                        return message.ERROR_INTERNAL_SERVER_MODEL
                    }
                    }
                    
                } catch (error) {
                    console.log(error)
                    return message.ERROR_INVALID_TOKEN
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