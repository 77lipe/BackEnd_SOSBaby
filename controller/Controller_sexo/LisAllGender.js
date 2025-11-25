/*******************************************************************
 * Autor: Felipe Vieira
 * Date: 18/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para Listar todos os  users
 *******************************************************************/

import * as message from '../../config/status/status.js'
import { SelectAllGenderSQL } from "../../model/SexDAO/SelectAllSex.js";

export const SelectAllGender = async function () {
    try {
        let dadosType = {}

        let resultType = await SelectAllGenderSQL()

        if (resultType != false) {
            if (resultType.length > 0) {
                dadosType.status_code = message.SUCCES_SEARCH_ITEM.status_code
                dadosType.message = message.SUCCES_SEARCH_ITEM.message
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