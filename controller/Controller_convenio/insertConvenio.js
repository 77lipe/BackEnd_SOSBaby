import * as message from '../../config/status/status.js'
import { insertSQLConvenio } from '../../model/ConvenioDAO/insertSQLConvenio.js'

export const insertConvenio = async function (convenio, contentType) {
    try {

        if (String(contentType).toLowerCase() === 'application/json') {

            if (
                convenio.nome == undefined || convenio.nome == null || convenio.nome == '' ||   convenio.nome.length > 100
            ) {
                return message.ERROR_REQUIRED_FIELDS
            } else {

                let resultInsert = await insertSQLConvenio(convenio)
                console.log(resultInsert);
                
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
