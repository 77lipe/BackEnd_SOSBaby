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
            return message.ERROR_REQUIRED_FIELDS
        }else{
            
            let resultRoutine = await getIdSQLRoutineResponsable(id)
            if (resultRoutine != false || typeof(resultRoutine) == 'object') {
                if(resultRoutine.length > 0){

                    let deleteRoutine = await deleteSQLRoutineResponsable(id)
                    if(deleteRoutine){
                        return message.SUCCES_DELETED_ITEM
                    }else{
                        return message.ERROR_INTERNAL_SERVER_MODEL
                    }
                }else{
                    return message.ERROR_NOT_FOUND
                }
            }else{ 
                return message.ERROR_INTERNAL_SERVER_MODEL
            }
        }
    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}