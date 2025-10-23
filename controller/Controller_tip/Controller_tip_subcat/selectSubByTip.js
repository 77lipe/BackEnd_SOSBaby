/*********************************************************
 * Autor: Felipe Vieira
 * Date: 14/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para GET ID sub relacionamento 
 *                                           DICAS e SUBCATEGORIAS
 ********************************************************/

import * as message from '../../../config/status/status.js'
import { getALLInnerSQLSubCategory } from '../../../model/TipDAO/Tip_SubCategoryDAO/getInnerSQLSub.js'

export const selectSubByDTip = async function(idSub){
    try {
        

        if(idSub == "" || isNaN(idSub) || idSub == undefined || idSub == null){
            return message.ERROR_REQUIRED_FIELDS
        }else{

            let dadosJson = {}
            let resultTipSub = await getALLInnerSQLSubCategory(idSub)

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