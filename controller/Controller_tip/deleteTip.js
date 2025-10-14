/*********************************************************
 * Autor: Felipe Vieira
 * Date: 14/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para DELETAR DICA POR ID
 ********************************************************/

import * as message from '../../config/status/status.js'
import { deleteSQLTip } from "../../model/TipDAO/deleteTip.js"
import { selectSQLIdTip } from "../../model/TipDAO/getIdTip.js";

export const deleteDica = async function(id){
    try {
        
        if (
            id == "" || id == undefined || id == null || isNaN(id)
        ) {
            return message.ERROR_REQUIRED_FIELDS
        }else{

            let resultIdDica = await selectSQLIdTip(id)
            if (resultIdDica != false || typeof (resultIdDica) == 'object') {
                if (resultIdDica.length > 0) {
                    
                    let resultDica = await deleteSQLTip(id)
                    if (resultDica) {
                        return message.SUCCES_DELETED_ITEM
                
                    }else{
                        return message.ERROR_INTERNAL_SERVER_MODEL
                    }
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