/***********************************************************
 * Autor: Eduardo Nascimento
 * Date: 02/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para GET ID Cep
 ***********************************************************/

import * as message from '../../config/status/status.js'
import { getIdSQLCep } from '../../model/CepDAO/SelectIdCep.js'

export const GetIdCep = async function (id) {
    try {

        let idGet = id
        let dadosCep = {}
        
        if (
            idGet == null || idGet == undefined || idGet == "" || isNaN(idGet)
        ){
            return message.ERROR_REQUIRED_FIELDS
        } else {
        
            let resultCep = await getIdSQLCep(id)
            if (resultCep) {
                if (resultCep.length > 0) {
                    dadosCep.message = message.SUCCES_SEARCH_ITEM
                    dadosCep.endereco = resultCep
                    return dadosCep
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