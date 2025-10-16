/**************************************************
 * Autor: Felipe Vieira
 * Date: 16/10/25
 * Versão: 1.0
 * Desc: App que irá conter as validações para
 *                  Buscar ID de uma Subcategoria 
 **************************************************/

 import res from 'express/lib/response';
import * as message from '../../../config/status/status.js'
 import { getAllSubCategory } from "../../../model/CategorysDAO/SubCategoryDAO/getAllSubCategory";


 export const listAllSub = async function (){
     try {
         
        let resultSubCategory = await getAllSubCategory()
        if (resultSubCategory != false) {
            if(resultSubCategory.length > 0){
                return {
                    ...message.SUCCES_SEARCH_ITEM,
                    items: resultSubCategory.length,
                    data: resultSubCategory
                }
            }else{
                return message.ERROR_NOT_FOUND
            }
        }else{
            return message.ERROR_INTERNAL_SERVER_MODEL
        }
     } catch (error) {
         console.log(error)
         return message.ERROR_INTERNAL_SERVER_CONTROLLER
     }

 }