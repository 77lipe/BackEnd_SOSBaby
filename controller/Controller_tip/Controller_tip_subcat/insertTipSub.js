/*********************************************************
 * Autor: Felipe Vieira
 * Date: 14/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para INSERT relacionamento 
 *                                           DICAS e SUBCATEGORIAS
 ********************************************************/

import * as message from '../../../config/status/status.js'
import { postSQLTipSubCategory } from "../../../model/TipDAO/Tip_SubCategoryDAO/postSQLTipSub.js"

export const insertTipSub = async function (tipSubCategory, contentType) {
    try {

        if(String(contentType).toLocaleLowerCase() === 'application/json'){
            if(
                tipSubCategory.id_dica          == '' || tipSubCategory.id_dica == undefined ||
                tipSubCategory.id_subcategoria  == '' || tipSubCategory.id_subcategoria == undefined 
            ){
                return message.ERROR_REQUIRED_FIELDS
            }else{

                let resultInsertTipSub = await postSQLTipSubCategory(tipSubCategory)
                if(resultInsertTipSub){
                    return {
                        ...message.SUCCES_CREATED_ITEM,
                        data: resultInsertTipSub
                    }
                }else{
                    return message.ERROR_INTERNAL_SERVER_MODEL
                }
            }

        } else {
            return message.ERROR_CONTENT_TYPE
        }
        
    } catch (error) {
        console.log(error);
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}