/**************************************************
 * Autor: Felipe Vieira
 * Date: 16/10/25
 * Versão: 1.0
 * Desc: App que irá conter as validações para
 *                  Criação de uma categoria 
 **************************************************/

import * as message from '../../../config/status/status.js'
import { deleteCategory } from "../../../model/CategorysDAO/CategoryDAO/deleteCategory.js"
import { getIdCategory } from '../../../model/CategorysDAO/CategoryDAO/getIdCategory.js'

export const deleteCategorys = async function (idCategorys) {
    try {

        let idGet = idCategorys
        if(
            idGet   == "" || idGet == undefined || idGet == null || isNaN(idGet)
        ){
            return message.ERROR_REQUIRED_FIELDS
        }else{

            let resultCategory = await getIdCategory(idGet)
            if(resultCategory != false || typeof(resultCategory) == 'object'){
                if (resultCategory.length > 0) {

                    let resultDelete = await deleteCategory(idGet)
                    if(resultDelete){
                        return message.SUCCES_DELETED_ITEM
                    }
                }else{
                    return message.ERROR_INTERNAL_SERVER_MODEL
                }
            }
        }

    } catch (error) {
        console.log(error);
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}