/*********************************************************
 * Autor: Felipe Vieira
 * Date: 30/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para INSERT DE 
 *       ROTINA DO RESPONSAVEL
 ********************************************************/

import * as message from '../../../config/status/status.js'
import { inserSQLRoutineResponsable } from '../../../model/RoutinesDAO/RoutineResponsable/InsertRoutineResponsable.js'

export const insertRoutineRespon = async function (routineRespon, contentType) {
    try {
        
        if (String(contentType) == 'application/json') {
            if (
                routineRespon.titulo == undefined        || routineRespon.titulo        == null || routineRespon.titulo         == "" || routineRespon.titulo.length > 100      ||
                routineRespon.cor == undefined           || routineRespon.cor           == null || routineRespon.cor            == "" || routineRespon.cor.length > 20          ||
                routineRespon.data_rotina == undefined   || routineRespon.data_rotina   == null || routineRespon.data_rotina    == "" || routineRespon.data_rotina.length > 10  ||
                routineRespon.id_user == undefined       || routineRespon.id_user       == null || routineRespon.id_user        == "" || isNaN(routineRespon.id_user)           
            ) {
                return message.ERROR_REQUIRED_FIELDS
            }else{
                
                let resultRoutine = await inserSQLRoutineResponsable(routineRespon)
                if (resultRoutine) {
                    return{
                        ...message.SUCCES_CREATED_ITEM,
                        data: routineRespon
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