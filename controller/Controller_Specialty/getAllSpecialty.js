import * as message from '../../config/status/status.js'
import { ListSQLEspecialidade } from '../../model/SpecialtyDAO/getAllSQLSpecialty.js'

export const getAllEspecialidades = async function () {
    try {

        let resultGet = await ListSQLEspecialidade()

        if (resultGet) {
            if (resultGet.length > 0) {
                return {
                    status_code: message.SUCCES_SEARCH_ITEM.status_code,
                    message: message.SUCCES_SEARCH_ITEM.message,
                    data: resultGet
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
