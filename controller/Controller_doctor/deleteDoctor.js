/***********************************************************
 * Autor: Felipe Vieira
 * Date: 30/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para DELETE Doctor
 ***********************************************************/

import * as message from '../../config/status/status.js'
import { deleteSQLDoctor } from '../../model/DoctorDAO/DeleteDoctor.js'

export const deleteDoctor = async function (id) {
    try {
        if (id == null || id == undefined || id == "" || isNaN(id)) {
            return message.ERROR_REQUIRED_FIELDS
        } else {
            let resultDeleteDoctor = await deleteSQLDoctor(id)

            if (resultDeleteDoctor) {
                return {
                    ...message.SUCCES_DELETE_ITEM,
                    data: resultDeleteDoctor
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