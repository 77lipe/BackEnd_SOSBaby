/**************************************************
 * Autor: Felipe Vieira
 * Date: 16/10/25
 * Versão: 1.0
 * Desc: App que irá conter as validações para
 *                  Criação de uma categoria 
 **************************************************/

import * as message from '../../../config/status/status.js'
import { postCategory } from "../../../model/CategorysDAO/CategoryDAO/postCategory.js";

export const insertCategory = async function (category, contentType) {
    try {
        
        if(String(contentType).toLocaleLowerCase() === "application/json"){
            if(
                category.nome_categoria  == "" || category.nome_categoria          == undefined || category.nome_categoria        == null || category.nome_categoria.length       > 100
            ){
                return message.ERROR_REQUIRED_FIELDS
            }else{
                let resultCategory = await postCategory(category)

                if(resultCategory){
                    return{
                        ...message.SUCCES_CREATED_ITEM,
                        data: resultCategory
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