/*********************************************************
 * Autor: Felipe Vieira
 * Date: 18/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para INSERT user
 ********************************************************/

import * as message from '../../config/status/status.js'
import { selectSQLIdUser } from "../../model/UserDAO/SelectIDUser.js"
import { deleteSQLUser } from "../../model/UserDAO/DeleteUser.js"

export const deleteUser = async function (id) {
    try {
        if(
            id == undefined || id == null || id == "" || isNaN(id)
        ){
            return message.ERROR_REQUIRED_FIELDS
        }else{

            let resultUser = await selectSQLIdUser(id)
            if(resultUser != false || typeof(resultUser)){
                if (resultUser.length > 0) {

                    let result = await deleteSQLUser(id)
                    if (result) {
                        return message.SUCCES_DELETED_ITEM
                    }else{
                        return message.ERROR_INTERNAL_SERVER_MODEL
                    }
                }else{
                    return message.ERROR_NOT_FOUND
                }
            }else{
                return message.ERROR_INTERNAL_SERVER_MODEL
            }
        }


    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}