import * as message from '../../config/status/status.js'
import { DeleteSQLConvenio } from '../../model/ConvenioDAO/deleteSQLConvenio.js'

export const deleteConvenio = async function (id) {
    try {

        if (id == undefined || id == null || id == "" || isNaN(id)) {
            return message.ERROR_REQUIRED_FIELDS
        }

        let resultDelete = await DeleteSQLConvenio(id)

        if (resultDelete) {
            return message.SUCCES_DELETED_ITEM
        } else {
            return message.ERROR_INTERNAL_SERVER_MODEL
        }

    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}
