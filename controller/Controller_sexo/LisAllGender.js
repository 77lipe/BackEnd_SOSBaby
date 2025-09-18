/*******************************************************************
 * Autor: Eduardo Couto
 * Date: 18/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para Listar todos os  users
 *******************************************************************/

const message = require('../../config/status/status')
import { SelectAllGenderSQL } from "../../model/TypeUserDAO/SelectAllUsers";

export const SelectAllGender = async function () {
    try {
        let dadosType = {}

        let resultType = await SelectAllGenderSQL()

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