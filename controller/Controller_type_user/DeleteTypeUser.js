/*********************************************************
 * Autor: Eduardo Couto
 * Date: 16/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para DELETE um tipo de user
 ********************************************************/

const message = require ('../../config/status/status')
import{DeleteTypeUserSQL} from "../../model/TypeUserDAO/DeleteTypeUser"
import{idTypeUser} from "../../model/TypeUserDAO/SelectByIdTypeUser"

const DeleteTypeUser = async function (id) {
    try {
        let IdRecebido = id
        if 
        (
            IdRecebido == "" || IdRecebido == undefined || IdRecebido == null || isNaN(IdRecebido)
        ) {
            return message.ERROR_REQUIRED_FIELDS
        } else {
            let result = await idTypeUser(id)
            if (result != false || typeof(result) == 'object') {
                if (result.length > 0 ) {
                    let IdRecebido = await DeleteTypeUser(id)
                    if (IdRecebido = true) {
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