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
        console.log(resultAllDoctor);
        
        if (resultAllDoctor) {
            if (resultAllDoctor.length > 0) {
                return {
                    status_code: message.SUCCES_SEARCH_ITEM.status_code,
                    message: message.SUCCES_SEARCH_ITEM.message,
                    itens: resultAllDoctor.length,
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