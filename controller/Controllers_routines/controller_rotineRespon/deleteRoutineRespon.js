/*********************************************************
 * Autor: Felipe Vieira
 * Date: 30/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para DELETE DE 
 *       ROTINA DO RESPONSAVEL
 ********************************************************/
import * as message from '../../../config/status/status.js'
import { getIdSQLRoutineResponsable } from "../../../model/RoutinesDAO/RoutineResponsable/GetIdRoutineResponsable.js";
import { deleteSQLRoutineResponsable } from "../../../model/RoutinesDAO/RoutineResponsable/DeleteRoutineResponsable.js";

export const deleteRoutineResponsable = async function (id){
    try {
        
        let getId = parseInt(id)
        if(
            getId == null || getId == undefined || getId == "" || isNaN(getId)
        ){

        }
    } catch (error) {
        
    }
}