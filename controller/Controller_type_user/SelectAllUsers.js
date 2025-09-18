/*******************************************************************
 * Autor: Eduardo Couto
 * Date: 16/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para Listar todos os  users
 *******************************************************************/

const message = require('../../config/status/status.js')
import { SelectAllTypeUsersSQL } from "../../model/TypeUserDAO/SelectAllUsers.js";

const SelectAllUsers = async function () {
    try {
        let dadosType = {}

        let resultType = await SelectAllTypeUsersSQL()

        if (resultType != false) {
            if (resultType.length > 0) {
                dadosType.status = true
                dadosType.status_code = 200
                dadosType.items = resultType.length
                dadosType.type = resultType

                return dadosType
            } else {
                 return message.ERROR_NOT_FOUND
            }
        } else {
             return message.ERROR_INTERNAL_SERVER_MODEL
        }
    } catch (error) {
         return message.ERROR_INTERNAL_SERVER_CONTROLLER 
    }
}