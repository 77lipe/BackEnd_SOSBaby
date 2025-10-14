/*******************************************************************
 * Autor: Isabelly Lima
 * Date: 09/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para Listar todos as datas
 *******************************************************************/

import * as message from '../../config/status/status.js'
import {ListSQLCalendario} from "../../model/CalendarioDAO/GetAllCalendario.js"

export const SelectAllCalendario = async function () {
    try {
        
        let dadosCalendario = {}

        let resultCalendario = await ListSQLCalendario()

        if (resultCalendario != false) {
            if (resultCalendario.length > 0) {
                dadosCalendario.message = message.SUCCES_SEARCH_ITEM.message
                dadosCalendario.status_code = message.SUCCES_SEARCH_ITEM.status_code
                dadosCalendario.items = resultCalendario.length
                dadosCalendario.dateCalender = resultCalendario

                return dadosCalendario
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