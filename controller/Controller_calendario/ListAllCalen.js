/*******************************************************************
 * Autor: Isabelly Lima
 * Date: 09/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para Listar todos as datas
 *******************************************************************/

import * as message from '../../config/status/status.js'
import {ListSQLCalendario} from "../../model/UserDAO/ListAllUser.js"

export const SelectAllCalendario = async function () {
    try {
        let dadosCalendario = {}

        let resultCalendario = await ListSQLCalendario()

        if (resultCalendario != false) {
            if (resultCalendario.length > 0) {
                dadosUser.message = message.SUCCES_SEARCH_ITEM
                dadosUser.items = resultUser.length
                dadosUser.type = resultUser

                return dadosUser
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