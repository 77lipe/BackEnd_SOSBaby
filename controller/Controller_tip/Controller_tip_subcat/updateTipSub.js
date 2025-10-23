/*********************************************************
 * Autor: Felipe Vieira
 * Date: 14/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para UPDATE relacionamento 
 *                                           DICAS e SUBCATEGORIAS
 ********************************************************/

import * as message from '../../../config/status/status.js'
import { putSQLTipSubCategory } from "../../../model/TipDAO/Tip_SubCategoryDAO/putSQLTipSub.js"
import { getIdSQLTipSubCategory } from "../../../model/TipDAO/Tip_SubCategoryDAO/getIdSQLTipSub.js";

export const updateTipSub = async function (id, tipSub, contentType){
    try {
        
        if(String(contentType).toLocaleLowerCase() == 'application/json'){
            if(
                tipSub.id_dica          == '' || tipSub.id_dica == undefined ||
                tipSub.id_subcategoria  == '' || tipSub.id_subcategoria == undefined 
            ){
                return message.ERROR_REQUIRED_FIELDS
            }else{

                let resultId = await getIdSQLTipSubCategory(id)
                if(resultId != false || typeof (resultId) == 'object'){
                    if(resultId.length > 0){

                        let resultUpdate = await putSQLTipSubCategory(tipSub)
                        if(resultUpdate){
                            return{
                                ...message.SUCCES_UPDATE_ITEM,
                                data: resultUpdate
                            }
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
        }else{
            return message.ERROR_CONTENT_TYPE
        }

    } catch (error) {
        console.log(error);
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}