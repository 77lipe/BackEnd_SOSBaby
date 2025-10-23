/*********************************************************
 * Autor: Felipe Vieira
 * Date: 14/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para PEGAR DICAS POR ID
 ********************************************************/

import * as message from '../../config/status/status.js'
import { selectSQLIdTip } from "../../model/TipDAO/getIdTip.js"
import { getIdSQLCategory } from '../../model/CategorysDAO/CategoryDAO/getIdCategory.js'

export const getIdDica = async function (id){
    try {
        
        let dadosDica = {}
        let arrayDicas = []
        
        if (
            id == "" || id == undefined || id == null || isNaN(id)
        ) {
            return message.ERROR_REQUIRED_FIELDS
        }else{

            let resultDica = await selectSQLIdTip(id)
            if (resultDica != false || typeof(resultDica) == 'object') {
                if (resultDica.length > 0) {
                    dadosDica.message = message.SUCCES_SEARCH_ITEM.message
                    dadosDica.status_code = message.SUCCES_SEARCH_ITEM.status_code
                    dadosDica.dica = resultDica

                    for (let itemDica of resultDica) {
                        let dadosTipo = await getIdSQLCategory(itemDica.id_categoria)
                        itemDica.tipo_dica = dadosTipo.data
                        delete itemDica.id_categoria

                        arrayDicas.push(itemDica)
                    }

                    dadosDica.dica = arrayDicas
                    return dadosDica
                }else{
                     return message.ERROR_NOT_FOUND
                }
            }else{
                 return message.ERROR_INTERNAL_SERVER_MODEL
            }
        }

    } catch (error) {
        console.log(error);
         return message.ERROR_INTERNAL_SERVER_CONTROLLER 
    }
}