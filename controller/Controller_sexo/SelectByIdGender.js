/*******************************************************************
 * Autor: Felipe Vieira
 * Date: 16/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para Listar todos os  users
 *******************************************************************/


import * as message from '../../config/status/status.js'
import { idGender} from "../../model/SexDAO/SelectByIdGender.js"

export const SearchIDGender = async function(id) {
    try {

        let idGet = id

        if (idGet == undefined || idGet == null  || idGet == ""  || isNaN(idGet)) {
            return message.ERROR_REQUIRED_FIELDS
        } else {
            let result = await idGender(idGet)
            if (result != false || typeof(result == 'object')) {
                if (result.length > 0) {
                    return{
                        ...message.SUCCES_SEARCH_ITEM,
                        data: result
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