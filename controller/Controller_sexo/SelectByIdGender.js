/*******************************************************************
 * Autor: Eduardo Couto
 * Date: 16/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para Listar todos os  users
 *******************************************************************/


import message from '../../config/status/status.js'
import { idGender} from "../../model/TypeUserDAO/SelectByIdTypeUser"

export const SearchIDGender = async function(id) {
    try {
        let idGet = id
        let dadosGender = {}

        if (idGet == undefined || idGet == null  || idGet == ""  || isNaN(idGet)) {
            return message.ERROR_REQUIRED_FIELDS
        } else {
            let result = await idGender(idGet)
            if (result != false || typeof(result == 'object')) {
                if (resultType.length > 0) {
                    dadosResp.message = message.SUCCES_SEARCH_ITEM
                    dadosGender.status = true
                    dadosGender.status_code = 200
                    dadosGender.items = result.length
                    dadosGender.type = result
        
                    return dadosGender
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