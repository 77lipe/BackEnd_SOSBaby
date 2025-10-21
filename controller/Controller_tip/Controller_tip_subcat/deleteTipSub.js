/*********************************************************
 * Autor: Felipe Vieira
 * Date: 14/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para DELETE relacionamento 
 *                                           DICAS e SUBCATEGORIAS
 ********************************************************/

import * as message from '../../../config/status/status.js'
import { deleteSQLTipSubCategory } from '../../../model/TipDAO/Tip_SubCategoryDAO/deleteSQLTipSub.js'
import { getIdSQLTipSubCategory } from '../../../model/TipDAO/Tip_SubCategoryDAO/getIdSQLTipSub.js'

export const deleteTipSub = async function(id){
    try {
        

        if(id == "" || isNaN(id) || id == undefined || id == null){
            return message.ERROR_REQUIRED_FIELDS
        }else{

            let resultId = await getIdSQLTipSubCategory(id)
            if(resultId != false || typeof (resultId) == 'object'){
                if(resultId.length > 0){

                    let resultDelete = await deleteSQLTipSubCategory(id)
                    if(resultDelete){
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
        console.log(error);
        return message.ERROR_INTERNAL_SERVER_CONTROLLER 
    }
}