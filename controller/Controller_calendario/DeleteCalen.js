/*********************************************************
 * Autor: Isabelly Lima
 * Date: 09/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para INSERT calendário
 ********************************************************/

import * as message from '../../config/status/status.js'
import {selectSQLIdCalendario} from "../../model/CalendarioDAO/GetIdCalendario.js"
import {deleteSQLCalendario} from "../../model/CalendarioDAO/DeleteCalendario.js"

export const deleteCalendario = async function (id) {
    try {
        if(
            id == undefined || id == null || id == "" || isNaN(id)
        ){
            return message.ERROR_REQUIRED_FIELDS
        }else{

            let resultCalendario = await selectSQLIdCalendario(id)
            if(resultCalendario != false || typeof(resultCalendario)){
                if (resultCalendario.length > 0) {

                    let result = await deleteSQLCalendario(id)
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