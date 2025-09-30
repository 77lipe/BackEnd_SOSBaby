/***********************************************************
 * Autor: Felipe Vieira
 * Date: 30/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para DELETE Doctor
 ***********************************************************/

import * as message from '../../config/status/status.js'
import { deleteSQLDoctor } from '../../model/DoctorDAO/DeleteDoctor.js'
import { selectByIdDoctor } from '../../model/DoctorDAO/SelectByIdDoctor.js'

export const deleteDoctor = async function (id) {
    try {

        if (id == null || id == undefined || id == "" || isNaN(id)) {
            return message.ERROR_REQUIRED_FIELDS
        } else {

            let resultDeleteDoctor = await selectByIdDoctor(id)
            if (resultDeleteDoctor != false || typeof (resultDeleteDoctor) == 'object') {
                if (resultDeleteDoctor.length > 0) {
                    
                    let idRecebido = await deleteSQLDoctor(id)
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