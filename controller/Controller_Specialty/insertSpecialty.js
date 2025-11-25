import * as message from '../../config/status/status.js'
import { insertSQLEspecialidade } from '../../model/SpecialtyDAO/insertSQLSpecialty.js'

export const insertEspecialidade = async function (especialidade, contentType) {
    try {

        if (String(contentType).toLowerCase() === 'application/json') {

            if (
                especialidade.especialidade == undefined ||
                especialidade.especialidade == null ||
                especialidade.especialidade == '' ||
                especialidade.especialidade.length > 100
            ) {
                return message.ERROR_REQUIRED_FIELDS
            } else {

                let resultInsert = await insertSQLEspecialidade(especialidade)

                if (resultInsert) {
                    return {
                        ...message.SUCCES_CREATED_ITEM,
                        data: resultInsert
                    }
                } else {
                    return message.ERROR_INTERNAL_SERVER_MODEL
                }
            }

        } else {
            return message.ERROR_CONTENT_TYPE
        }

    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}
