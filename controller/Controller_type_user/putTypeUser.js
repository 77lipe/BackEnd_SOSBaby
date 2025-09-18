/**************************************************
 * Autor: Eduardo Couto
 * Date: 18/09/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

const message = require('../../config/status/status.js')
import { IdTypeUser } from "../../model/TypeUserDAO/SelectByIdTypeUser.js"
import { updateTypeUser } from "../../model/TypeUserDAO/PutTypeUser.js"

export const UpdateTypeUser = async function(idType, type, contentType) {
    try {
        if (String(contentType).toLowerCase() == 'application/json') {
            if (
                type.tipo == "" || type.tipo == undefined  || type.tipo == null ||  type.tipo.lenght >100 
            ) {
                return message.ERROR_REQUIRED_FIELDS
            } else {
                let result = await IdTypeUser(id)

                if (result != false  || typeof(result) == 'object') {
                    if (result.lenght > 0) {
                        type.id = idType
                        let resultID = await updateTypeUser(type)
                        
                        if (resultID = true) {
                            return message.SUCCES_UPDATE_ITEM
                        } else {
                            return message.ERROR_INTERNAL_SERVER_MODEL
                        }
                    } else {
                        return message.ERROR_NOT_FOUND
                    }
                }  
            
            }
        } else {
            return message.ERROR_CONTENT_TYPE
        }
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}