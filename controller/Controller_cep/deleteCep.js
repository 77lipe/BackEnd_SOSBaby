/***********************************************************
 * Autor: Eduardo Nascimento 
 * Date: 02/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para DELETE Cep
 ***********************************************************/

import * as message from '../../config/status/status.js'
import { deleteSQLCep } from '../../model/CepDAO/DeleteCep.js'
import { selectByIdCep } from '../../model/CepDAO/SelectIdCep.js'

export const DeleteCep = async function (id) {
    try {

        if (id == null || id == undefined || id == "" || isNaN(id)) {
            return message.ERROR_REQUIRED_FIELDS
        } else {

            let resultCep = await selectByIdCep(id)
            if (resultCep != false || typeof (resultCep) == 'object') {
                if (resultCep.length > 0) {
                    
                    let idRecebido = await deleteSQLCep(id)
                    if (idRecebido) {
                        return message.SUCCES_DELETED_ITEM
                    }else{
                        return message.ERROR_INTERNAL_SERVER_MODEL
                    }
                }else{
                    return message.ERROR_NOT_FOUND
                }
            } else {
                return message.ERROR_INTERNAL_SERVER_MODEL
            }
        }
    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}