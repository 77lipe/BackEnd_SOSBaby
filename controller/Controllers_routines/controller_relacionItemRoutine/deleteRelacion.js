import * as message from "../../../config/status/status.js";
import { deleteSQLRoutine } from "../../../model/RoutinesDAO/RelacionItemRotina/DeleteSQLRotina.js";
import { getSQLAllRoutine } from "../../../model/RoutinesDAO/RelacionItemRotina/GetALLRelacionRotina.js";

export const deleteRelacionamentoRoutine = async function (id) {
  try {

    let idRecebido = id
    if (idRecebido == undefined || idRecebido == null || idRecebido == "" || isNaN(idRecebido)) {  
        return message.ERROR_REQUIRED_FIELDS;
    }else{
      
        let resultDelete = await getSQLAllRoutine(id);
        if (resultDelete != false || typeof resultDelete == "object") {
          if (resultDelete.length > 0) {
        
            let idResultItem = await deleteSQLRoutine(id);
            
            if (idResultItem) {
              return message.SUCCES_DELETED_ITEM;
            } else {
              return message.ERROR_INTERNAL_SERVER_MODEL;
            }
          }else{
            return message.ERROR_NOT_FOUND;
          }
        }
      }
  } catch (error) {
    console.log(error);
    return message.ERROR_INTERNAL_SERVER_CONTROLLER;
  }
};