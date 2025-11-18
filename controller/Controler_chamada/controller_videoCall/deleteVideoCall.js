import * as message from '../../../config/status/status.js'
import { deleteSQLChamada } from '../../../model/ChamadaDAO/videoCall/deleteSQLChamada.js'

export const deleteChamada = async function (id) {
    try {

        if (id == undefined || isNaN(id))
            return message.ERROR_INVALID_ID

        let result = await deleteSQLChamada(id)

        if (result)
            return message.SUCCES_DELETED_ITEM

        return message.ERROR_NOT_FOUND

    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER
    }
}
