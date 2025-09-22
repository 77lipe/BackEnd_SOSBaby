/*********************************************************
 * Autor: Felipe Vieira
 * Date: 21/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para INSERT tipo sanguneo
 ********************************************************/

import * as message from '../../config/status/status.js'
import { SelectIdSQLBlood } from '../../model/BloodDAO/SelectIdBlood.js'
import { DeleteSQLBlood } from '../../model/BloodDAO/DeleteBlood.js'

export const DeleteBlood = async function (id) {
    try {
        
        if (
            id == "" || id == null || id == undefined || isNaN(id)
        ){
            return message.ERROR_REQUIRED_FIELDS  
        }else{

            let resultBlood = await SelectIdSQLBlood(id)
            if (resultBlood != false || typeof(resultBlood) == 'object') {

                let resultBlood = await DeleteSQLBlood(id)
                if(resultBlood.length > 0){
                    return message.SUCCES_DELETED_ITEM
                }else{
                    return message.ERROR_NOT_FOUND
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