/**************************************************
 * Autor: Felipe Vieira
 * Date: 16/10/25
 * Versão: 1.0
 * Desc: App que irá conter as validações para
 *                  Criação de uma Sub categoria 
 **************************************************/

import * as message from '../../../config/status/status.js'
import { getIdSQLSubCategory } from "../../../model/CategorysDAO/SubCategoryDAO/getIdSubCategory.js";

export const getIdSub = async function (id){
    try {
        
        if(id == null || id == undefined || id == "" || isNaN(id)){
            return message.ERROR_REQUIRED_FIELDS
        }else{

            let resultSub = await getIdSQLSubCategory(id)
            if(resultSub != false || typeof(resultSub) == 'object'){
                if(resultSub.length > 0){
                    return {
                        ...message.SUCCES_SEARCH_ITEM,
                        data: resultSub
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