/*********************************************************
 * Autor: Felipe Vieira
 * Date: 18/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para INSERT user
 ********************************************************/

import * as message from '../../config/status/status.js'
import { selectSQLIdUser } from "../../model/UserDAO/SelectIDUser.js"
import { idTypeUser } from "../../model/TypeUserDAO/SelectByIdTypeUser.js";

export const selectIDUser = async function (id) {
    try {

        let arrayUser = []
        let jsonUser = {}
        
        if (
            id == "" || id == undefined || id == null || isNaN(id)
        ){
            return message.ERROR_REQUIRED_FIELDS
        }else{

            let resultUser = await selectSQLIdUser(id)
            if(resultUser != false || typeof(resultUser) == 'object'){
                if (resultUser.length > 0) {
                    jsonUser.message = message.SUCCES_SEARCH_ITEM.message,
                    jsonUser.status_code = message.SUCCES_SEARCH_ITEM.status_code

                    for(const itemUser of resultUser){
                        let tipo = await idTypeUser(itemUser.id_tipo)
                        itemUser.data_tipo = tipo
                        delete itemUser.id_tipo
                        

                        arrayUser.push(itemUser)
                    }
                    jsonUser.usuario = arrayUser
                    return jsonUser
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