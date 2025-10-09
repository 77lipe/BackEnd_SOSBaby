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

export const resetPassword = async function (token, newPass, contentType){
    try {
     
        if(String(contentType).toLocaleLowerCase() === 'application/json'){
            if(
                token   == null || token   == undefined || token   == '' ||
                newPass == null || newPass == undefined || newPass == ''
            ){
                return message.ERROR_REQUIRED_FIELDS
            }else{
                try {
                   
                    const decoded = jwt.verify(token, process.env.JWT_SECRET)
                    const userId = decoded.id

                    const hash = await bcrypt.hash(newPass, 10)
                    const result = await updateUserPassword(userId, hash)

                    if(result){
                        return{
                            ...message.SUCCES_PASSWORD_RESET,
                            data: newPass
                        }
                    }else{
                        return message.ERROR_INTERNAL_SERVER_MODEL
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