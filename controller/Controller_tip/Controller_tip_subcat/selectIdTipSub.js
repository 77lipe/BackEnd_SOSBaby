/*********************************************************
 * Autor: Felipe Vieira
 * Date: 14/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para GET ID relacionamento 
 *                                           DICAS e SUBCATEGORIAS
 ********************************************************/

import * as message from '../../../config/status/status.js'
import { getIdSQLTipSubCategory } from '../../../model/TipDAO/Tip_SubCategoryDAO/getIdSQLTipSub.js'

export const selectIsTipSub = async function(id){
    try {
        

        if(id == "" || isNaN(id) || id == undefined || id == null){
            return message.ERROR_REQUIRED_FIELDS
        }else{

            let dadosJson = {}
            let resultTipSub = await getIdSQLTipSubCategory(id)

            if(resultTipSub != false || typeof (resultTipSub) == 'object'){
                if(resultTipSub.length > 0){

                    dadosJson.status_code = message.SUCCES_SEARCH_ITEM.status_code
                    dadosJson.message = message.SUCCES_SEARCH_ITEM.message
                    dadosJson.items = resultTipSub.length
                    dadosJson.data = resultTipSub

                    return dadosJson
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