/*******************************************************************
 * Autor: Felipe Vieira
 * Date: 21/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para Listar todos os  users
 *******************************************************************/

import * as message from '../../config/status/status.js'
import { SelectIdSQLBlood } from '../../model/BloodDAO/SelectIdBlood.js'

export const SelectIdBlood = async function (id) {
    try {

        if (
            id == "" || id == null || id == undefined || isNaN(id)
        ) {
          return message.ERROR_REQUIRED_FIELDS  
        }else{

            let resultBlood = await SelectIdSQLBlood(id)
            if (resultBlood != false || typeof(resultBlood) == 'object') {
                return {
                    ...message.SUCCES_SEARCH_ITEM,
                    blood: resultBlood
                }
            } else {
                return message.ERROR_INTERNAL_SERVER_MODEL
            }
        }


    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}