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
import { selectSQLIdTip } from '../../../model/TipDAO/getIdTip.js'
import { getIdSQLSubCategory } from "../../../model/CategorysDAO/SubCategoryDAO/getIdSubCategory.js";

export const selectAllTipSub = async function(){
    try {
        
        let dataArray = []
        let dadosJson = {}
        let resultTipSub = await getAllSQLTipSubCategory()

        if(resultTipSub){
            if(resultTipSub.length > 0){
                dadosJson.status_code = message.SUCCES_SEARCH_ITEM.status_code
                dadosJson.message = message.SUCCES_SEARCH_ITEM.message
                dadosJson.items = resultTipSub.length
                dadosJson.data = resultTipSub

                for(let item of resultTipSub){
                    let dataDica = await selectSQLIdTip(item.id_dica)
                    item.dica = dataDica[0]
                    delete item.id_dica

                    let dataSubCat = await getIdSQLSubCategory(item.id_subcategoria)
                    item.subcategoria = dataSubCat
                    delete item.id_subcategoria

                    dataArray.push(item)
                }

                dadosJson.data = dataArray
                return dadosJson
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