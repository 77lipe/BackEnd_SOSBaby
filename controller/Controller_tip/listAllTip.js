/*********************************************************
 * Autor: Felipe Vieira
 * Date: 14/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para PEGAR todas DICAS
 ********************************************************/

import * as message from '../../config/status/status.js'
import { selectSQLAllTip } from "../../model/TipDAO/getAllTip.js"
import { getIdCategory } from "../../controller/Controller_categorys/zController_category/getIdCategory.js";

export const getAllDica = async function (){
    try {
        
        let dadosDica = {}
        let arrayDica = []

        let resultDica = await selectSQLAllTip()
        if (resultDica != false) {
            if (resultDica.length > 0) {
                dadosDica.message = message.SUCCES_SEARCH_ITEM.message
                dadosDica.status_code = message.SUCCES_SEARCH_ITEM.status_code
                dadosDica.items = resultDica.length
                dadosDica.dicas = resultDica
                
                for(let itemDica of resultDica){
                    let dadosTipo = await getIdCategory(itemDica.id_categoria)
                    itemDica.tipo_dica = dadosTipo.data
                    delete itemDica.id_categoria

                    arrayDica.push(itemDica)
                }

                dadosDica.dicas = arrayDica
                return dadosDica
            }else{
                 return message.ERROR_NOT_FOUND
            }
        }else{
             return message.ERROR_INTERNAL_SERVER_MODEL
        }

    } catch (error) {
        console.log(error);
         return message.ERROR_INTERNAL_SERVER_CONTROLLER 
    }
}