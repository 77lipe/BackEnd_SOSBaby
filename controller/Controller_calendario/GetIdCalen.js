/***********************************************************
 * Autor: Isabelly Lima
 * Date: 09/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para GET ID Calendário
 ***********************************************************/

import * as message from '../../config/status/status.js'
import {getIdSQLCalendario} from '../../model/CalendarioDAO/GetIdCalendario'

export const GetIdCalendario = async function (id) {
    try {

        let idGet = id
        let dadosCalendario = {}
        let calendarioArray = []
        
        if (
            idGet == null || idGet == undefined || idGet == "" || isNaN(idGet)
        ){
            return message.ERROR_REQUIRED_FIELDS
        } else {
        
            let resultIdCalendario = await getIdSQLCalendario(id)
            if (resultIdCalendario) {
                if (resultIdCalendario.length > 0) {
                    dadosCalendario.message = message.SUCCES_SEARCH_ITEM

                    for (let itemCalendario of resultIdCalendario) {
                        let dadosGender = await idGender(itemCalendario.id_calendario)
                        itemCalendario.calendario = dadosGender

                         calendarioArray.push(itemCalendario)
                    }
                    
                    dadosCalendario.calendario = calendarioArray
                    return dadosCalendario
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