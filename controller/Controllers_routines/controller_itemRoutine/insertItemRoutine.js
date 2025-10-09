/*********************************************************
 * Autor: Felipe Vieira
 * Date: 30/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para INSERT DE ITEM DE ROTINA
 ********************************************************/

import * as message from '../../../config/status/status.js'
import { insertSqlItemRoutine } from '../../../model/RoutinesDAO/ItemRoutine/InsertItemRoutine.js'

export const insertItemRoutine = async function (itemRoutine, contentType){
    try {
        
        if (String(contentType).toLocaleLowerCase() === 'application/json') {
            if (
                itemRoutine.id_rotina      == undefined     || itemRoutine.id_rotina        == null || itemRoutine.id_rotina        == '' || isNaN(itemRoutine.id_rotina)               ||
                itemRoutine.titulo         == undefined     || itemRoutine.titulo           == null || itemRoutine.titulo           == '' || itemRoutine.titulo.length         > 45     ||
                itemRoutine.descricao      == undefined     || itemRoutine.descricao        == null || itemRoutine.descricao        == '' || itemRoutine.descricao.length    > 100      ||
                itemRoutine.id_rotina      == undefined     || itemRoutine.id_rotina        == null || itemRoutine.id_rotina        == '' || isNaN(itemRoutine.id_rotina)               ||
                itemRoutine.hora           == undefined     || itemRoutine.hora             == null || itemRoutine.hora             == '' || itemRoutine.hora.length          > 5       
            ){
                return message.ERROR_REQUIRED_FIELDS                
            }else{

                let resultInsertItemRoutine = await insertSqlItemRoutine(itemRoutine)

                if(resultInsertItemRoutine){
                    return {
                        ...message.SUCCES_CREATED_ITEM,
                        data: resultInsertItemRoutine
                    }
                }else{
                    return message.ERROR_INTERNAL_SERVER
                }
            }
        }else{
            return message.ERROR_CONTENT_TYPE
        }   

    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER    
    }
}