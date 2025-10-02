/*********************************************************
 * Autor: Felipe Vieira
 * Date: 30/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para INSERT DE ITEM DE ROTINA
 ********************************************************/

import * as message from '../../../config/status/status.js'
import { updateItemRoutine } from '../../../model/Controllers_routines/model_itemRoutine/updateItemRoutine.js'
import { getIdSQLItemRoutine } from "../../../model/routine" //Falta criar a model

export const updateItemRoutine = async function (id ,itemRoutine, contentType){
    try {
        
        if (String(contentType).toLocaleLowerCase() === 'application/json') {
            if (
                itemRoutine.id_rotina             == undefined   || itemRoutine.id_rotina             == null || itemRoutine.id_rotina              == '' || isNaN(itemRoutine.id_rotina)                ||
                itemRoutine.titulo                == undefined   || itemRoutine.titulo                == null || itemRoutine.titulo                 == '' || itemRoutine.titulo.length         > 45      ||
                itemRoutine.descricao             == undefined   || itemRoutine.descricao             == null || itemRoutine.descricao              == '' || itemRoutine.descricao.length      > 100     ||
                itemRoutine.id_rotina             == undefined   || itemRoutine.id_rotina             == null || itemRoutine.id_rotina              == '' || isNaN(itemRoutine.id_rotina)                ||
                itemRoutine.hora                  == undefined   || itemRoutine.hora                  == null || itemRoutine.hora                   == '' || itemRoutine.hora.length           > 5       
            ){
                return message.ERROR_REQUIRED_FIELDS                
            }else{

                let checkId = await getIdSQLItemRoutine(id)
                if(checkId != false  || typeof(checkId) == 'object'){
                    if(checkId.length > 0){
                        idItemRotina.id = id
                        let result = await updateItemRoutine(idItemRotina)

                        if(result){
                            return message.SUCCES_UPDATE_ITEM
                        }
                    }else{
                        return message.ERROR_NOT_FOUND
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