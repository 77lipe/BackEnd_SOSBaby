/*********************************************************
 * Autor: Felipe Vieira
 * Date: 30/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para INSERT DE 
 *       ROTINA DO RESPONSAVEL
 ********************************************************/

import * as message from '../../../config/status/status.js'
import { insertSQLRoutineRespon } from '../../../model/Controllers_routines/model_routine/insertRoutineRespon.js'

export const insertRoutineRespon = async function (routineRespon, contentType) {
    try {
        
        if (String(contentType) == 'application/json') {
            if (
                routineRespon.titulo == undefined        || routineRespon.titulo == null || routineRespon.titulo == "" || routineRespon.titulo.length > 100 ||
                routineRespon.cor == undefined           || routineRespon.cor == null || routineRespon.cor == "" || routineRespon.cor.length > 20 ||
                routineRespon.data_rotina == undefined   || routineRespon.data_rotina == null   || routineRespon.data_rotina == "" || routineRespon.data_rotina.length > 10 ||
                routineRespon.id_user == undefined       || routineRespon.id_user == null       || routineRespon.id_user == "" || isNaN(routineRespon.id_user) ||
                routineRespon.id_itemRotina == undefined || routineRespon.id_itemRotina == null || routineRespon.id_itemRotina == "" || isNaN(routineRespon.id_itemRotina)
            ) {
                
            }
        }

    } catch (error) {
        
    }
}