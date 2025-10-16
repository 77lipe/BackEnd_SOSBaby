/**************************************************
 * Autor: Felipe Vieira
 * Date: 16/10/25
 * Versão: 1.0
 * Desc: App que irá conter as validações para
 *                  Criação de uma categoria 
 **************************************************/

import * as message from '../../../config/status/status.js'
import { putCategory } from "../../../model/CategorysDAO/CategoryDAO/putCategory.js"
import { getIdSQLCategory } from '../../../model/CategorysDAO/CategoryDAO/getIdCategory.js'

export const updateCategory = async function (idCategorys, category, contentType) {
    try {
        let idGet = idCategorys

        if(String(contentType).toLocaleLowerCase() === "application/json"){
            if(
                idGet                     == "" || idGet                     == undefined || idGet                     == null || isNaN(idGet) ||
                category.nome_categoria   == "" || category.nome_categoria   == undefined || category.nome_categoria   == null || category.nome_categoria.length > 100
            ){
                return message.ERROR_REQUIRED_FIELDS
            }else{
                let resultId = await getIdSQLCategory(idGet)

                if(resultId != false || typeof(resultId) == 'object'){
                    if(resultId.length > 0){

                        category.id = idGet
                        let resultCategory = await putCategory(category)

                        if(resultCategory){
                            return message.SUCCES_UPDATE_ITEM
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