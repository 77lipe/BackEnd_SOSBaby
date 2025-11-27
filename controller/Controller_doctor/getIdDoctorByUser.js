import * as message from '../../config/status/status.js'
import { getIdSQLDoctorByUser } from '../../model/DoctorDAO/GetIdDoctorByUser.js'

export const getDoctorByUser = async function (id) {
    try {

        let idGet = id
        
        if (
            idGet == null || idGet == undefined || idGet == "" || isNaN(idGet)
        ){
            return message.ERROR_REQUIRED_FIELDS
        } else {
        
            let resultIdDoctor = await getIdSQLDoctorByUser(idGet)
            if (resultIdDoctor != false && typeof (resultIdDoctor) == 'object') {
                if (resultIdDoctor.length > 0) {
                    return {
                        status_code: message.SUCCES_SEARCH_ITEM.status_code,
                        message: message.SUCCES_SEARCH_ITEM.message,
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