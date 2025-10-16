/*********************************************************
 * Autor: Felipe Vieira
 * Date: 21/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para INSERT tipo sanguneo
 ********************************************************/

import * as message from '../../config/status/status.js'
import { InsertSQLBlood } from '../../model/BloodDAO/InsertBlood.js'

export const insertSangue = async function (blood, contentType) {
    try {

        if (String(contentType).toLowerCase() == 'application/json') {
            if (
                blood.tipo_sanguineo == "" || blood.tipo_sanguineo == null || blood.tipo_sanguineo == undefined || blood.tipo_sanguineo.length > 3
            ){
              return message.ERROR_REQUIRED_FIELDS
            }else{
                let resultBlood = await InsertSQLBlood(blood)

                if (resultBlood) {
                    return {
                        ...message.SUCCES_CREATED_ITEM,
                        data: blood
                    }
                } else {
                    return message.ERROR_INTERNAL_SERVER_MODEL
                }
            }
        }else{
            return message.ERROR_CONTENT_TYPE
        }
    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER   
    }
}