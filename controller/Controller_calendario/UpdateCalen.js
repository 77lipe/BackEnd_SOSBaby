/***********************************************************
 * Autor: Isabelly Lima
 * Date: 09/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para UPDATE Calendário
 ***********************************************************/

import * as message from '../../config/status/status.js'
import {updateSQLCalendario} from '../../model/CalendarioDAO/PutCalendario.js' 
import { selectSQLIdCalendario } from "../../model/CalendarioDAO/GetIdCalendario.js";

export const updateCalendario = async function (id, dataCalendario, contentType) {
    try {

        if (String(contentType).toLocaleLowerCase() == 'application/json') {
            if (
                dataCalendario.data_evento              == "" || dataCalendario.data_evento     == undefined || dataCalendario.data_evento      == null || dataCalendario.data_evento.length > 25   ||
                calendario.hora_calendario              == "" || calendario.hora_calendario         == undefined || calendario.hora_calendario  == null || calendario.hora_calendario.length > 10   ||
                isNaN(calendario.alarme_ativo)            || calendario.alerme_ativo > 1 ||
                dataCalendario.titulo                   == "" || dataCalendario.titulo          == undefined || dataCalendario.titulo           == null || dataCalendario.titulo.length > 100       ||
                dataCalendario.cor                      == "" || dataCalendario.cor             == undefined || dataCalendario.cor              == null || dataCalendario.cor.length > 10           ||
                dataCalendario.id_user                  == "" || dataCalendario.id_user         == undefined || dataCalendario.id_user          == null || isNaN(dataCalendario.id_user)   
            ) {
                return message.ERROR_REQUIRED_FIELDS
            }else{

                let resultIdCalender = await selectSQLIdCalendario(id)
                if (resultIdCalender != false || typeof (resultIdCalender) == 'object') {
                    if (resultIdCalender.length > 0) {
                        
                        dataCalendario.id_calendario = id
                        let resultCalender = await updateSQLCalendario(dataCalendario)

                        if (resultCalender) {
                            return {
                                ...message.SUCCES_UPDATE_ITEM,
                                data: dataCalendario
                            }
                        }
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