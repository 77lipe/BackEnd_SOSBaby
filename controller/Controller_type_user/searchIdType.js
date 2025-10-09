/*******************************************************************
 * Autor: Eduardo Couto
 * Date: 16/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para Listar todos os  users
 *******************************************************************/


import * as message from '../../config/status/status.js'
import { idTypeUser } from "../../model/TypeUserDAO/SelectByIdTypeUser.js"

export const searchIDTypeUser = async function(id) {
    try {

        let idGet = id

        if (idGet == undefined || idGet == null  || idGet == ""  || isNaN(idGet)) {
            return message.ERROR_REQUIRED_FIELDS
        } else {
            let resultType = await idTypeUser(idGet)
            if (resultType != false || typeof(result) == 'object') {
                if (resultType.length > 0) {
                    return{
                        message: message.SUCCES_SEARCH_ITEM.message,
                        status_code: message.SUCCES_SEARCH_ITEM.status_code,
                        type: resultType
                    }
                } else {
                    return message.ERROR_NOT_FOUND
                }

            } else {
                return message.ERROR_INTERNAL_SERVER_MODEL
            }
        }
    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER;
    }
}