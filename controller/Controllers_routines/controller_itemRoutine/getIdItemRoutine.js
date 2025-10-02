/*********************************************************
 * Autor: Felipe Vieira
 * Date: 30/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para INSERT DE 
 *       ITEM DE ROTINA
 ********************************************************/
import * as message from '../../../config/status/status.js'
import { idItemRoutine } from '../../../model/RoutinesDAO/ItemRoutine/GetIdItemRoutine.js'
import { getIdRoutineRespon } from '../../../model/Controllers_routines/model_routine/getAllRoutines.js' // falta criar

export const getIdItemRoutine = async function (id) {
    try {
        
        getId = id
        if (
            getId == undefined || getId == null || getId == "" || isNaN(getId)
        ) {
            return message.ERROR_REQUIRED_FIELDS
        
        }else{
           
            let itemRoutineArray = []
            let itemRoutineJson = {}
            let resultItemRoutine = await idItemRoutine(getId)

            if (resultItemRoutine != false || typeof(resultItemRoutine) == 'object') {
                if (resultItemRoutine.length > 0) {
                    itemRoutineJson.message = message.SUCCES_SEARCH_ITEM
                    itemRoutineJson.items = resultItemRoutine.length
                    itemRoutineJson.itens_rotinas = resultItemRoutine

                    for (item of resultItemRoutine) {
                        let dadoRoutine = await getIdRoutine(item.id_rotina)
                        item.rotina = dadoRoutine.titulo

                        itemRoutineArray.push(item)
                    }
                    itemRoutineJson.itens_rotinas = itemRoutineArray
                    return itemRoutineJson

                } else {
                     return message.ERROR_NOT_FOUND
                }
            } else {
                 return message.ERROR_INTERNAL_SERVER_MODEL
            }
        }    
        
    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}