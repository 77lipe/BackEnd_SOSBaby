/***********************************************************
 * Autor: Felipe Vieira
 * Date: 18/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para GET ID Doctor
 ***********************************************************/

import * as message from '../../config/status/status.js'
import { getIdSQLDoctor } from '../../model/DoctorDAO/GetIdDoctor.js'

export const getIdDoctor = async function (id) {
    try {
        if (id == null || id == undefined || id == "" || isNaN(id)) {
            return message.ERROR_REQUIRED_FIELDS
        } else {
            let resultIdDoctor = await getIdSQLDoctor(id)

            if (resultIdDoctor) {
                if (resultIdDoctor.length > 0) {
                    return {
                        ...message.SUCCES_SEARCH_ITEM,
                        data: resultIdDoctor
                    }
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