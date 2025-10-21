/*********************************************************
 * Autor: Felipe Vieira
 * Date: 14/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para GET ALL relacionamento 
 *                                           DICAS e SUBCATEGORIAS
 ********************************************************/

import * as message from '../../../config/status/status.js'
import { getAllSQLTipSubCategory } from '../../../model/TipDAO/Tip_SubCategoryDAO/getAllSQLTipSub.js'

export const selectAllTipSub = async function(){
    try {
        
        let dadosJson = {}
        let resultTipSub = await getAllSQLTipSubCategory()

        if(resultTipSub != false){
            dadosJson.status_code = message.SUCCES_SEARCH_ITEM.status_code
            dadosJson.message = message.SUCCES_SEARCH_ITEM.message
            dadosJson.items = resultTipSub.length
            dadosJson.data = resultTipSub

            return dadosJson
        }else{
            return message.ERROR_INTERNAL_SERVER_MODEL
        }

    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}