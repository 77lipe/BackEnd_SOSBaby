/**************************************************
 * Autor: Felipe Vieira
 * Date: 16/10/25
 * Versão: 1.0
 * Desc: App que irá conter as validações para
 *                    Deletar uma Subcategoria 
 **************************************************/

import * as message from '../../../config/status/status.js'
import { deleteSubCategory } from "../../../model/CategorysDAO/SubCategoryDAO/deleteSubCategory"
import { getIdSQLCategory } from "../../../model/CategorysDAO/CategoryDAO/getIdCategory.js"

export const deleteSub = async function (id){
    try {
        
        if(id == null || id == undefined || id == "" || isNaN(id)){
            return message.ERROR_REQUIRED_FIELDS
        }else{

            let getId = await getIdSQLCategory(id)
            if(getId != false || typeof(getId) == 'object'){
                if(getId.length > 0){
                    
                    let idDelete = await deleteSubCategory(getId)
                    if(idDelete){
                        return message.SUCCES_DELETED_ITEM
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