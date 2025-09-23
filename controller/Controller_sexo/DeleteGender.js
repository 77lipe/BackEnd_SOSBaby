/*********************************************************
 * Autor: Felipe Vieira
 * Date: 22/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para DELETE sexo
 ********************************************************/

import * as message from '../../config/status/status.js'
import{DeleteGenderSQL} from "../../model/SexDAO/DeleteGender.js"
import{idGender} from "../../model/SexDAO/SelectByIdGender.js"

export const DeleteGender = async function (id) {
    try {
        let IdRecebido = id
        if 
        (
            IdRecebido == "" || IdRecebido == undefined || IdRecebido == null || isNaN(IdRecebido)
        ) {
            return message.ERROR_REQUIRED_FIELDS
        } else {
            let result = await idGender(id)
            if (result != false || typeof(result) == 'object') {
                if (result.length > 0 ) {
                    let IdRecebido = await DeleteGenderSQL(id)
                    if (IdRecebido) {
                        return message.SUCCES_DELETED_ITEM
                    } else {
                        return message.ERROR_INTERNAL_SERVER_MODEL
                    }
                } else {
                    return message.ERROR_NOT_FOUND
                }
            } else {
                return message.ERROR_INTERNAL_SERVER_MODEL
            }
        }
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}