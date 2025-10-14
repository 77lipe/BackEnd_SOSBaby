/*********************************************************
 * Autor: Felipe Vieira
 * Date: 30/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para UPDATE DE 
 *       ROTINA DO RESPONSAVEL
 ********************************************************/
import * as message from '../../../config/status/status.js'
import {getIdSQLRoutineResponsable} from '../../../model/RoutinesDAO/RoutineResponsable/GetIdRoutineResponsable.js'
import {putSQLRoutineResponsable} from '../../../model/RoutinesDAO/RoutineResponsable/PutRoutineResponsable.js'

export const updateRoutineResponsable = async function (id, dataRoutine, contentType){
    try {
        
        if (String(contentType).toLocaleLowerCase() == 'application/json') {
            if (
                routineRespon.titulo == undefined        || routineRespon.titulo        == null || routineRespon.titulo         == "" || routineRespon.titulo.length > 100      ||
                routineRespon.cor == undefined           || routineRespon.cor           == null || routineRespon.cor            == "" || routineRespon.cor.length > 20          ||
                routineRespon.data_rotina == undefined   || routineRespon.data_rotina   == null || routineRespon.data_rotina    == "" || routineRespon.data_rotina.length > 10  ||
                routineRespon.id_user == undefined       || routineRespon.id_user       == null || routineRespon.id_user        == "" || isNaN(routineRespon.id_user)           
            ){
                return message.ERROR_REQUIRED_FIELDS
            }else{

                let resultRoutine = await getIdSQLRoutineResponsable(parseInt(id))
                if (resultRoutine != false || typeoff(resultRoutine) == 'object') {
                    if (resultRoutine.length > 0) {
                        dataRoutine.id = parseInt(id)
                        let getIdresult = await putSQLRoutineResponsable(dataRoutine)

                        if (getIdresult) {
                            return{
                                ...message.SUCCES_UPDATE_ITEM,
                                data: dataRoutine
                            }
                        }else{
                            return message.ERROR_INTERNAL_SERVER_MODEL
                        }
                    }else{
                        return message.ERROR_NOT_FOUND
                    }
                }else{
                    return message.ERROR_INTERNAL_SERVER_CONTROLLER
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