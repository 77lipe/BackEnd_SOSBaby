/***********************************************************
 * Autor: Isabelly Lima
 * Date: 09/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para UPDATE Calendário
 ***********************************************************/

import * as message from '../../config/status/status.js'
import {updateSQLCalendario} from '../../model/CalendarioDAO/PutCalendario' 

export const updateSQLCalendario = async function (dataCalendario, contentType) {
    try {
        
        if (String(contentType).toLocaleLowerCase() === 'application/json') {
            if (
                dataCalendario.dia       == null   || dataCalendario.dia     == undefined   || dataCalendario.dia     == ""  || dataCalendario.dia.length     > 365     ||
                dataCalendario.mes       == null   || dataCalendario.mes     == undefined   || dataCalendario.mes     == ""  || dataCalendario.mes.length     > 2       ||
                dataCalendario.ano       == null   || dataCalendario.ano     == undefined   || dataCalendario.ano     == ""  || dataCalendario.ano.length     > 5000    ||
                dataCalendario.titulo    == null   || dataCalendario.titulo  == undefined   || dataCalendario.titulo  == ""  || dataCalendario.titulo.length  > 100     ||
                dataCalendario.nota      == null   || dataCalendario.nota    == undefined   || dataCalendario.nota    == ""  || dataCalendario.nota.length    > 100     ||
                dataCalendario.cor       == null   || dataCalendario.cor     == undefined   || dataCalendario.cor     == ""  || isNaN(dataCalendario.cor)               ||
                dataCalendario.alarme    == null   || dataCalendario.alarme  == undefined   || dataCalendario.alarme  == ""  || isNaN(dataCalendario.alarme)            ||
                dataCalendario.id        == null   || dataCalendario.id      == undefined   || dataCalendario.id      == ""  || isNaN(dataCalendario.id)                   

            ) {

                return message.ERROR_REQUIRED_FIELDS
            }else{
                let resultCalendario = await updateSQLCalendario(dataCalendario)

                if(resultCalendario){
                    return {
                        ...message.SUCCES_UPDATE_ITEM,
                        data: resultCalendario
                    }
                }else{
                    return message.ERROR_INTERNAL_SERVER_MODEL
                }
            }
        }else{
            return message.ERROR_CONTENT_TYPE
        }

    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER        
    }
}