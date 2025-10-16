/**************************************************
 * Autor: Felipe Vieira
 * Date: 16/10/25
 * Versão: 1.0
 * Desc: App que irá conter as validações para
 *                  Criação de uma categoria 
 **************************************************/

import * as message from '../../../config/status/status.js'
import { getAllCategory } from "../../../model/CategorysDAO/CategoryDAO/getAllCategory.js"

export const listAllCategory = async function () {
    try {
        let resultCategory = await getAllCategory()

        if(resultCategory != false || typeof(resultCategory) == 'object'){
            if(resultCategory.length > 0){
                return{
                    ...message.SUCCES_SEARCH_ITEM,
                    items: resultCategory.length,
                    data: resultCategory
                }
            }else{
                return message.ERROR_NOT_FOUND
            }
        }else{
            return message.ERROR_INTERNAL_SERVER_MODEL
        }
    } catch (error) {
        console.log(error);
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}