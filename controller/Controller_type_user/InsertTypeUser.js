/*********************************************************
 * Autor: Eduardo Couto
 * Date: 16/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para INSERT um tipo user
 ********************************************************/

const message = require('../../config/status/status.js')
import { insertTypeUserSQL } from "../../model/TypeUserDAO/insertTypeUser.js";

export const insertTypeUser = async function (type, contentType) {
    try {
        
        if(String(contentType).toLowerCase()= "application/json"){
            if (
                type.tipo == "" || type.tipo == undefined || type.tipo == null || type.tipo.length > 100
            ) {
                return message.ERROR_REQUIRED_FIELDS
            } else {
                let resultType = await insertTypeUserSQL(type)

                if (resultType = true) {
                    return{
                         ...message.SUCCES_CREATED_ITEM,
                         data: resultUser
                    }
                } else {
                    return message.ERROR_INTERNAL_SERVER_MODEL
                }
            }
        }else{
            return message.ERROR_CONTENT_TYPE
        }

    } catch (error) {
         return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}