/*******************************************************************
 * Autor: Isabelly Lima
 * Date: 16/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para Listar todos os  users
 *******************************************************************/

import * as message from '../../config/status/status.js'
import { ListSQLusers } from "../../model/UserDAO/ListAllUser.js"

export const SelectAllUsers = async function () {
    try {
        let dadosUser = {}

        let resultUser = await ListSQLusers()

        if (resultUser != false) {
            if (resultUser.length > 0) {
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