import * as message from '../../config/status/status.js'
import { ListSQLConvenio } from '../../model/ConvenioDAO/getAllSQLConvenio.js'

export const getAllConvenio = async function () {
    try {

        let resultGet = await ListSQLConvenio()

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
