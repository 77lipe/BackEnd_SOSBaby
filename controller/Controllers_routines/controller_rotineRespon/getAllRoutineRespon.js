/*********************************************************
 * Autor: Felipe Vieira
 * Date: 30/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para GET ID DE 
 *       ROTINA DO RESPONSAVEL
 ********************************************************/

import * as message from '../../../config/status/status.js'
import { getAllSQLRoutineResponsable } from "../../../model/RoutinesDAO/RoutineResponsable/GetAllRoutineResponsable.js";
import { selectSQLIdUser } from "../../../model/UserDAO/SelectIDUser.js";

export const getAllRoutinesResponsable = async function(){
    try {
        
        let routineArray = []
        let routineJSON = {}
        
        let resultRoutine = await getAllSQLRoutineResponsable()
        if (resultRoutine != false) {
            if (resultRoutine.length > 0) {
                routineJSON.message = message.SUCCES_SEARCH_ITEM
                routineJSON.items = resultRoutine.length

                for(itemRoutine of resultRoutine){
                    let idUser = await selectSQLIdUser(itemRoutine.id_user)
                    itemRoutine.usuario = idUser.id_user
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

    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}