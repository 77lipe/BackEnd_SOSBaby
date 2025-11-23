/*********************************************************
 * Autor: Felipe Vieira
 * Date: 22/11/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para INSERT DE ITEM DE ROTINA
 ********************************************************/

import * as message from '../../../config/status/status.js'
import { insertSqlItemRoutine } from '../../../model/RoutinesDAO/ItemRoutine/InsertItemRoutine.js'
import { inserSQLRoutineResponsable } from "../../../model/RoutinesDAO/RoutineResponsable/InsertRoutineResponsable.js";
import { insertSQLRotinaItem } from "../../../model/RoutinesDAO/RelacionItemRotina/insertSQLRotinaItem.js";

export const insertRelacionamentoRoutine = async function (itemRoutine, contentType){

    try {
        
        let IdRotinaFinal = null

        if (String(contentType).toLocaleLowerCase() === 'application/json') {
            if (

                //tbl_item_rotina
                itemRoutine.titulo_item    == undefined     || itemRoutine.titulo_item           == null || itemRoutine.titulo_item           == '' || itemRoutine.titulo_item.length         > 45     ||
                itemRoutine.hora           == undefined     || itemRoutine.hora             == null || itemRoutine.hora             == '' || itemRoutine.hora.length          > 5       ||
                itemRoutine.data_rotina    == undefined     || itemRoutine.data_rotina      == null || itemRoutine.data_rotina  > 20 || itemRoutine.data_rotina == ''
            ){
                return message.ERROR_REQUIRED_FIELDS                
            }else{

                let resultInsertItemRoutine = await insertSqlItemRoutine(itemRoutine)
                if(resultInsertItemRoutine){
                    console.log("item_rotina CRIADO COM SUCESSO");
                    //console.log("item:", resultInsertItemRoutine);
                    
                    if(itemRoutine.id_rotina){

                        IdRotinaFinal = itemRoutine.id_rotina
                        console.log('USANDO ROTINA EXISTENTE:', IdRotinaFinal);
                        
                    }else{

                        if (    
                            //tbl_rotina
                            itemRoutine.titulo_rotina == undefined || itemRoutine.titulo_rotina     == null || itemRoutine.titulo_rotina    == "" || itemRoutine.titulo_rotina.length > 100 ||
                            itemRoutine.cor == undefined           || itemRoutine.cor               == null || itemRoutine.cor            == "" || itemRoutine.cor.length > 20          ||
                            itemRoutine.id_user == undefined       || itemRoutine.id_user           == null || itemRoutine.id_user        == "" || isNaN(itemRoutine.id_user)           
                        ){
                            return {
                                status_code: message.ERROR_REQUIRED_FIELDS.status_code,
                                message: message.ERROR_REQUIRED_FIELDS.message 
                            }
                        }else{

                            var resultInsertRoutine = await inserSQLRoutineResponsable(itemRoutine)
                            if(resultInsertRoutine){
                                console.log("ROTINA CRIADO COM SUCESSO");

                                IdRotinaFinal = resultInsertItemRoutine.id_rotina
                            }else{
                                return {
                                    status_code: message.ERROR_INTERNAL_SERVER_MODEL.status_code,
                                    message: message.ERROR_INTERNAL_SERVER_MODEL.message,
                                    MODEL: "ERRO NA MODEL ROTINA"
                                } 
                            }
                        }
                    }

                    if (IdRotinaFinal != null) {

                        let ReqToRelacion = {
                            id_rotina: IdRotinaFinal,
                            id_item: resultInsertItemRoutine.id_item
                        }
                        //console.log(ReqToRelacion);

                        let resultRelacion = await insertSQLRotinaItem(ReqToRelacion)
                        if(resultRelacion){

                            return{
                                status_code: message.SUCCES_CREATED_ITEM.status_code,
                                message: message.SUCCES_CREATED_ITEM.message,
                                dataRotina: resultInsertRoutine || { id_rotina: IdRotinaFinal },
                                dataItem: resultInsertItemRoutine,
                                dataRelacionamento: resultRelacion
                            }
                        }else{
                            return {
                                status_code: message.ERROR_INTERNAL_SERVER_MODEL.status_code,
                                message: message.ERROR_INTERNAL_SERVER_MODEL.message,
                                MODEL: "ERRO NA MODEL RELACIONAMENTO"
                            } 
                        }
                    }
        
                }else{
                    return {
                        status_code: message.ERROR_INTERNAL_SERVER_MODEL.status_code,
                        message: message.ERROR_INTERNAL_SERVER_MODEL.message,
                        MODEL: "ERRO NA MODEL ITEM ROTINA"
                    } 
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