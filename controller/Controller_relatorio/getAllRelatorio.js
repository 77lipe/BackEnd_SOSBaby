/*******************************************************************
 * Autor: Isabelly Lima
 * Date: 06/11/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para Listar todos os relatórios
 *******************************************************************/

import * as message from '../../config/status/status.js'
import {ListSQLRelatorio} from "../../model/RelatorioDAO/GetAllRelatorio.js"

export const SelectAllRelatorio = async function () {
    try {
        
        let dadosRelatorio = {}

        let resultRelatorio = await ListSQLRelatorio()

        if (resultRelatorio != false) {
            if (resultRelatorio.length > 0) {
                dadosRelatorio.message = message.SUCCES_SEARCH_ITEM.message
                dadosRelatorio.status_code = message.SUCCES_SEARCH_ITEM.status_code
                dadosRelatorio.items = resultRelatorio.length
                dadosRelatorio.allRelatorio = resultRelatorio

                return dadosRelatorio
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