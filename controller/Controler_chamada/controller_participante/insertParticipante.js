import * as message from '../../../config/status/status.js'
import { insertSQLChamadaParticipante } from '../../../model/ChamadaDAO/Participant/insertSQLParticipant.js'

export const insertChamadaParticipante = async function (body, contentType) {
    try {

        if (String(contentType).toLowerCase() !== "application/json")
            return message.ERROR_CONTENT_TYPE

        if (
            body.id_chamada == undefined || isNaN(body.id_chamada) ||
            body.id_user == undefined || isNaN(body.id_user)
        ) {
            return message.ERROR_REQUIRED_FIELDS
        }

        let result = await insertSQLChamadaParticipante(body)

        if (result) {
            return {
                ...message.SUCCES_CREATED_ITEM,
                data: result
            }
        } else {
            return message.ERROR_INTERNAL_SERVER
        }

    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER
    }
}
