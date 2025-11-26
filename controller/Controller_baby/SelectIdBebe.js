/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para 
 *                              SELECT ID bebe
 ********************************************************/

import * as message from '../../config/status/status.js'
import { SelectIdSQLBaby } from '../../model/BabyDAO/SelectIdSQLBaby.js'

export const selectIdBebe = async function (id) {
    try {
        
        let idGet = id


        if (idGet == undefined || idGet == null || idGet == "" || isNaN(idGet)) {
            return message.ERROR_REQUIRED_FIELDS
        } else {

            let resultBaby = await SelectIdSQLBaby(idGet)
            if (resultBaby) {
                if (resultBaby.length > 0) {
                    return {
                        status_code: message.SUCCES_SEARCH_ITEM.status_code,
                        message: message.SUCCES_SEARCH_ITEM.message,
                        data: resultBaby
                    }
                } else {
                    return message.ERROR_NOT_FOUND
                }
            } else {
                return message.ERROR_INTERNAL_SERVER_MODEL
            }
        }

    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}