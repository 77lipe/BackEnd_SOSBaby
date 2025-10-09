/*********************************************************
 * Autor: Isabelly Lima
 * Date: 09/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para INSERT calendário
 ********************************************************/

import * as message from '../../config/status/status.js'
import {insertSQLCalendario} from "../../model/CalendarioDAO/InsertCalendario";


export const insertCalendario = async function (calendario, contentType) {
    try {

        if(String(contentType).toLocaleLowerCase() === "application/json"){
            if(
                calendario.dia             == "" || calendario.dia            == undefined || calendario.dia            == null || calendario.dia.length    > 365   ||
                calendario.mes             == "" || calendario.mes            == undefined || calendario.mes            == null || calendario.mes.length    > 12    ||
                calendario.ano             == "" || calendario.ano            == undefined || calendario.ano            == null || calendario.ano           > 5000  ||
                calendario.titulo          == "" || calendario.titulo         == undefined || calendario.titulo         == null || calendario.titulo.length > 100   ||
                calendario.nota            == "" || calendario.nota           == undefined || calendario.nota           == null || calendario.nota.length   > 100   ||
                calendario.cor             == "" || calendario.cor            == undefined || calendario.cor            == null || isNaN(calendario.cor)            ||
                calendario.alarme          == "" || calendario.alarme         == undefined || calendario.alarme         == null || isNaN(calendario.alarme)         ||
                calendario.id_calendario   == "" || calendario.id_calendario  == undefined || calendario.id_calendario  == null || isNaN(calendario.id_calendario)   
            ){
                return message.ERROR_REQUIRED_FIELDS
            }else{
                let resultCalendario = await insertSQLCalendario(calendario)

                if(resultCalendario){
                    return{
                        ...message.SUCCES_CREATED_ITEM,
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
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}