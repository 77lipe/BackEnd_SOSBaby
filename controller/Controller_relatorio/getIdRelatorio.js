/***********************************************************
 * Autor: Isabelly Lima
 * Date: 06/11/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para GET ID relatório
 ***********************************************************/

import * as message from '../../config/status/status.js'
import {selectSQLIdRelatorio} from '../../model/RelatorioDAO/GetIDRelatorio.js'
import {selectSQLIdUser} from '../../model/UserDAO/SelectIDUser.js'

export const GetIDRelatorio = async function (id) {
    try {

        let idGet = id
        let dadosRelatorio = {}
        let relatorioArray = []
        
        if (
            idGet == null || idGet == undefined || idGet == "" || isNaN(idGet)
        ){
            return message.ERROR_REQUIRED_FIELDS
        } else {
        
            let resultIdRelatorio = await selectSQLIdRelatorio(id)
            if (resultIdRelatorio) {
                if (resultIdRelatorio.length > 0) {
                    dadosRelatorio.message = message.SUCCES_SEARCH_ITEM.message
                    dadosRelatorio.status_code = message.SUCCES_SEARCH_ITEM.status_code
                    dadosRelatorio.relatorio = resultIdRelatorio

                    for (let itemRelatorio of resultIdRelatorio) {
                        let dadosUser = await selectSQLIdUser(itemRelatorio.id_user)
                        itemRelatorio.user = dadosUser
                        delete itemRelatorio.id_user

                        relatorioArray.push(itemRelatorio)
                    }
                    
                    dadosRelatorio.relatorio = relatorioArray
                    return dadosRelatorio
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