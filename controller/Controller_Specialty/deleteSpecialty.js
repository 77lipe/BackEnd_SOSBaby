import * as message from '../../config/status/status.js'
import { DeleteSQLEspecialidade } from '../../model/SpecialtyDAO/deleteSQLSpecialty.js'

export const deleteEspecialidade = async function (id) {
    try {

        if (id == undefined || id == null || id == "" || isNaN(id)) {
            return message.ERROR_REQUIRED_FIELDS
        }

        let resultDelete = await DeleteSQLEspecialidade(id)

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
