/***********************************************************
 * Autor: Felipe Vieira
 * Date: 18/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para GET ALL Doctor
 ***********************************************************/
import * as message from '../../config/status/status.js'
import { getAllSQLDoctor } from '../../model/DoctorDAO/GetAllDoctor.js'

export const getAllDoctor = async function () {
    try {
        let resultAllDoctor = await getAllSQLDoctor()

        if (resultAllDoctor != false) {
            if (resultAllDoctor.length > 0) {
                return {
                    ...message.SUCCES_SEARCH_ITEM,
                    items: resultAllDoctor.length,
                    data: resultAllDoctor
                }
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