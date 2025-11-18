import * as message from '../../../config/status/status.js'
import { selectChamadaById } from '../../../model/ChamadaDAO/videoCall/getSQLChamada.js'

export const getChamada = async function (id) {
    try {
        if (id == undefined || id == null || id == '' || isNaN(id)) {
            return message.ERROR_INVALID_ID
        }

        let chamada = await selectChamadaById(id)

        if (chamada) {
            return {
                ...message.SUCCES_REQUEST,
                data: chamada
            }
        } else {
            return message.ERROR_NOT_FOUND
        }

    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER
    }
}
