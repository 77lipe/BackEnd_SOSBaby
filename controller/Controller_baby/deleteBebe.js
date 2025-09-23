/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para 
 *                              DELETE bebe
 ********************************************************/

import * as message from '../../config/status/status.js'
import { DeleteSQLBaby } from '../../model/BabyDAO/DeleteSQLBaby.js'

export const deleteBebe = async function (id) {
    try {

        let idGet = id
        if (idGet == undefined || idGet == null || idGet == "" || isNaN(idGet)) {
            return message.ERROR_REQUIRED_FIELDS
        
        } else {

            let resultID = await DeleteSQLBaby(idGet)
            if (resultID) {
                return message.SUCCES_DELETED_ITEM
            } else {
                return message.ERROR_INTERNAL_SERVER_MODEL
            }
        }

    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}