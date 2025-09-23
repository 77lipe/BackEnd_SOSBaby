/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para 
 *                              SELECT ID bebe
 ********************************************************/

import * as message from '../../config/status/status.js'
import { SelectIdSQLBaby } from '../../model/BabyDAO/SelectIdSQLBaby.js'
import { idGender } from '../../model/SexDAO/SelectByIdGender.js'
import { SelectIdSQLBlood } from '../../model/BloodDAO/SelectIdBlood.js'

export const selectIdBebe = async function (id) {
    try {
        
        let idGet = id
        let ArrayBaby = []
        let BabyDataJson = {}

        if (idGet == undefined || idGet == null || idGet == "" || isNaN(idGet)) {
            return message.ERROR_REQUIRED_FIELDS
        } else {

            let resultBaby = await SelectIdSQLBaby(idGet)
            if (resultBaby != false || typeof (resultBaby) == 'object') {
                if (resultBaby.length > 0) {
                    BabyDataJson.message = message.SUCCES_SEARCH_ITEM
                    BabyDataJson.items = resultBaby.length

                    for (item of resultBaby) {
                        let dadoGender = await idGender(item.id_sexo)
                        item.sexo = dadoGender.sexo

                        let dadoBlood = await SelectIdSQLBlood(item.id_sangue)
                        item.tipo_sanguineo = dadoBlood.tipo_sanguineo

                        ArrayBaby.push(item)
                    }
                    BabyDataJson.bebes = ArrayBaby
                    return BabyDataJson
                } else {
                    return message.ERROR_NOT_FOUND
                }
            } else {
                return message.ERROR_INTERNAL_SERVER_MODEL
            }
        }


    } catch (error) {
        
    }
}