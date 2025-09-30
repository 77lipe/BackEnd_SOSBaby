/*********************************************************
 * Autor: Felipe Vieira
 * Date: 30/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para INSERT DE 
 *       ITEM DE ROTINA
 ********************************************************/

import * as message from '../../../config/status/status.js'
import { getAllItensRoutines } from '../../../model/Controllers_routines/model_itemRoutine/getAllItensRoutines.js'
import { getIdRoutineRespon } from '../../../model/Controllers_routines/model_routine/getAllRoutines.js'

export const getAllItensRoutines = async function () {
    try {
        
        let itensRoutinesArray = []
        let itensRoutinesJson = {}

        let resultAllRoutines = await getAllItensRoutines()
        if (resultAllRoutines != false || typeof(resultAllRoutines) == 'object') {
            if (resultAllRoutines.length > 0) {
                itensRoutinesJson.message = message.SUCCES_SEARCH_ITEM
                itensRoutinesJson.items = resultAllRoutines.length
                itensRoutinesJson.itens_rotinas = resultAllRoutines

                for (item of resultAllRoutines) {
                    let dadoRoutine = await getIdRoutine(item.id_rotina)
                    item.rotina = dadoRoutine.titulo

                    itensRoutinesArray.push(item)
                }
                itensRoutinesJson.itens_rotinas = itensRoutinesArray
                return itensRoutinesJson

            } else {
                 return message.ERROR_NOT_FOUND
            }
        } else {
             return message.ERROR_INTERNAL_SERVER_MODEL
        }

    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}