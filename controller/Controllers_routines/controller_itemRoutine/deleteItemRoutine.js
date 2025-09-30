/*********************************************************
 * Autor: Felipe Vieira
 * Date: 30/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as
 *       validações dos dados recebidos para DELETE DE UM
 *       ITEM DE ROTINA
 ********************************************************/

import * as message from "../../../config/status/status.js";
import { deleteItemRoutine } from "../../../model/Controllers_routines/model_itemRoutine/deleteItemRoutine.js";
import { selectByIdItemRoutine } from "../../../model/Controllers_routines/model_itemRoutine/selectByIdItemRoutine.js";

export const deleteItemRoutine = async function (id) {
  try {

    let idRecebido = id
    if (idRecebido == undefined || idRecebido == null || idRecebido == "" || isNaN(idRecebido)) {  
        return message.ERROR_REQUIRED_FIELDS;
    }else{
      
        let resultItemRoutine = await selectByIdItemRoutine(id);
      if (resultItemRoutine != false || typeof resultItemRoutine == "object") {
        if (resultItemRoutine.length > 0) {
        
            let idResultItem = await deleteItemRoutine(id);
            if (idResultItem) {
            return message.SUCCES_DELETED_ITEM;
          
        } else {
            return message.ERROR_INTERNAL_SERVER_MODEL;
        }
        } else {
          return message.ERROR_NOT_FOUND;
        }
      }
    }
  } catch (error) {
    console.log(error);
    return message.ERROR_INTERNAL_SERVER;
  }
};
