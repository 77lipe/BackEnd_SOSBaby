/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para 
 *                              SELECT ALL bebe
 ********************************************************/

import * as message from '../../config/status/status.js'
import { ListSQLBaby } from '../../model/BabyDAO/ListSQLBaby.js'
import { idGender } from '../../model/SexDAO/SelectByIdGender.js'
import { SelectIdSQLBlood } from '../../model/BloodDAO/SelectIdBlood.js'

export const selectAllBebe = async function () {
    try {

        let resultBaby = await ListSQLBaby()
        if (resultBaby != false) {
            if (resultBaby.length > 0) {

                return {
                    status_code: message.SUCCES_SEARCH_ITEM.status_code,
                    message: message.SUCCES_SEARCH_ITEM.message,
                    data: resultBaby
                }
            } else {
                return message.ERROR_NOT_FOUND
            }   
        }else{
            return message.ERROR_INTERNAL_SERVER_MODEL
        }


    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER;
    }
}
