/***********************************************************
 * Autor: Eduardo Nascimento
 * Date: 02/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para GET ALL CEP
 ***********************************************************/
import * as message from '../../config/status/status.js'
import { getAllSQLCep } from '../../model/CepDAO/ListAllCep.js'

export const getAllCep = async function () {
    try {

        let cepJson = {}

        let resultCep = await getAllSQLClinica()
        if (resultCep != false || typeof(resultCep) == 'object') {
            if (resultCep.length > 0) {
                cepJson.message = message.SUCCES_SEARCH_ITEM
                cepJson.items = resultCep.length
                cepJson.endereco = resultCep
                return cepJson

            } else {
                 return message.ERROR_NOT_FOUND
            }
        } else {
             return message.ERROR_INTERNAL_SERVER_MODEL
        }
    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER 
    }
}