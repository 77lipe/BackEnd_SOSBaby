/***********************************************************
 * Autor: Eduardo Nascimento 
 * Date: 02/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para DELETE Clinica
 ***********************************************************/

import * as message from '../../config/status/status.js'
import { deleteClinica } from '../../model/ClinicaDAO/DeleteClinica.js'
import { idClinica } from '../../model/ClinicaDAO/SelectIDClinica.js'

export const DeleteClinica = async function (id) {
    try {

        if (id == null || id == undefined || id == "" || isNaN(id)) {
            return message.ERROR_REQUIRED_FIELDS
        } else {

            let resultClinica = await idClinica(id)
            if (resultClinica != false || typeof (resultClinica) == 'object') {
                if (resultClinica.length > 0) {
                    
                    let idRecebido = await deleteClinica(id)
                    if (idRecebido) {
                        return message.SUCCES_DELETED_ITEM
                    }else{
                        return message.ERROR_INTERNAL_SERVER_MODEL
                    }
                }else{
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