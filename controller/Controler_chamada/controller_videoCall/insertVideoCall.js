import * as message from '../../../config/status/status.js'
import { insertSQLChamada } from '../../../model/ChamadaDAO/videoCall/insertSQLChamada.js'

export const insertChamada = async function (chamada, contentType) {
    try {

        if (String(contentType).toLowerCase() !== "application/json")
            return message.ERROR_CONTENT_TYPE

        if (
            chamada.nome_chamada == undefined ||
            chamada.nome_chamada == null ||
            chamada.nome_chamada == '' ||
            chamada.nome_chamada.length > 100
        ) {
            return message.ERROR_REQUIRED_FIELDS
        }

        let result = await insertSQLChamada(chamada)

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
