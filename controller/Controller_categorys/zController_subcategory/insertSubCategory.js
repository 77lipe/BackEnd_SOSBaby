/**************************************************
 * Autor: Felipe Vieira
 * Date: 16/10/25
 * Versão: 1.0
 * Desc: App que irá conter as validações para
 *                  Criação de uma categoria 
 **************************************************/

import * as message from '../../../config/status/status.js'
import {postSubCategory} from '../../../model/CategorysDAO/SubCategoryDAO/postSubCategory.js'

export const insertCategory = async function (dataSubCat, contentType){
    try {
        
        if (String(contentType).toLocaleLowerCase() === 'application/json') {
            if (
                dataSubCat.nome_subcategoria == '' || dataSubCat.nome_subcategoria == null || dataSubCat.nome_subcategoria == undefined || dataSubCat.nome_subcategoria.length > 50        
            ) {
                return message.ERROR_REQUIRED_FIELDS
            }else{

                let resultSubcat = await postSubCategory(dataSubCat)
                if(resultSubcat){
                    return {
                        ...message.SUCCES_CREATED_ITEM,
                        data: resultSubcat
                    }
                }else{
                    return message.ERROR_INTERNAL_SERVER_MODEL
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