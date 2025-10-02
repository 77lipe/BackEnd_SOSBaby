/*********************************************************
 * Autor: Felipe Vieira
 * Date: 30/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para GET ALL DE 
 *       ROTINA DO RESPONSAVEL
 ********************************************************/
import * as message from '../../../config/status/status.js'
import { getIdSQLRoutineResponsable } from "../../../model/RoutinesDAO/RoutineResponsable/GetIdRoutineResponsable"
import { selectSQLIdUser } from "../../../model/UserDAO/SelectIDUser.js";

export const getIdRoutineResponsable = async function (id){
    try {
        
        let idGet = id
        let routineArray = []
        let routineJSON  = {}

        if (
            idGet == '' || idGet == null || idGet == undefined || isNaN(idGet)
        ) {
            return message.ERROR_REQUIRED_FIELDS
        }else{

            let resultRoutine = await getIdSQLRoutineResponsable(id)
            if (resultRoutine != false || typeof(resultRoutine) == 'object') {
                if (resultRoutine.length > 0) {
                    routineJSON.message = message.SUCCES_SEARCH_ITEM
                    
                    for(itemRoutine of resultRoutine){
                        let idUser = await selectSQLIdUser(resultRoutine.id_user)
                        itemRoutine.id_user = resultRoutine.id_user
                        delete itemRoutine.id_user

                        routineArray.push(itemRoutine)
                    }

                    routineJSON.usuario = routineArray
                    return routineJSON

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