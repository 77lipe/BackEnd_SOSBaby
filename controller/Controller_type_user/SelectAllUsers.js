/*******************************************************************
 * Autor: Eduardo Couto
 * Date: 16/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para Listar todos os  users
 *******************************************************************/

import * as message from '../../config/status/status.js'
import { SelectAllTypeUsersSQL } from "../../model/TypeUserDAO/SelectAllUsers.js";

export const SelectAllUsers = async function () {
    try {
  
        let resultType = await SelectAllTypeUsersSQL()
        
        if (resultType != false) {
            if (resultType.length > 0) {
                return{
                    status_code: message.SUCCES_SEARCH_ITEM.status_code,
                    message: message.SUCCES_SEARCH_ITEM.message,
                    items: resultType.length,
                    type: resultType
                }
            } else {
                 return message.ERROR_NOT_FOUND
            }
        } else {
             return message.ERROR_INTERNAL_SERVER_MODEL
        }
    } catch (error) {
        console.log(error);
         return message.ERROR_INTERNAL_SERVER_CONTROLLER 
    }
}