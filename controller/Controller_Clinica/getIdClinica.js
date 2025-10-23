/***********************************************************
 * Autor: Eduardo Nascimento
 * Date: 02/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para GET ID Clinica
 ***********************************************************/

import * as message from '../../config/status/status.js'
import { getIdSQLClinica } from '../../model/ClinicaDAO/SelectIDClinica.js'
import {selectSQLIdUser} from '../../model/UserDAO/SelectIDUser.js'

export const GetIdClinica = async function (id) {
    try {

        let idGet = id
        let dadosClinica = {}
        let clinicaArray = []
        
        if (
            idGet == null || idGet == undefined || idGet == "" || isNaN(idGet)
        ){
            return message.ERROR_REQUIRED_FIELDS
        } else {
        
            let resultClinica = await getIdSQLClinica(id)
            if (resultClinica) {
                if (resultClinica.length > 0) {
                    dadosClinica.message = message.SUCCES_SEARCH_ITEM

                    for (let item of resultClinica) {
                        let dadosUser = await selectSQLIdUser(item.id_usuario)
                        item.usuario = dadosUser

                        clinicaArray.push(item)
                    }
                    
                    dadosClinica.clinica = clinicaArray
                    return dadosClinica
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