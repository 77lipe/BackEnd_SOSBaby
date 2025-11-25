import * as message from '../../config/status/status.js'
import { SelectIdSQLConvenio } from '../../model/ConvenioDAO/getIdSQLConvenio.js'

export const getConvenioById = async function (id) {
    try {

        if (id == undefined || id == null || id == "" || isNaN(id)) {
            return message.ERROR_REQUIRED_FIELDS
        } else {

            let resultGet = await SelectIdSQLConvenio(id)

            if (resultGet.length > 0) {
                return {
                    status_code: message.SUCCES_SEARCH_ITEM.status_code,
                    message: message.SUCCES_SEARCH_ITEM.message,
                    data: resultGet
                }
            } else {
                return message.ERROR_NOT_FOUND
            }
        }

    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}
