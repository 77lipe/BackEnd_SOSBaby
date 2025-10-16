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
import { SearchIDGender } from '../../controller/Controller_sexo/SelectByIdGender.js'
import { SelectIdBlood } from '../../controller/Controller_blood/selectIDSangue.js'

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
                    BabyDataJson.message = message.SUCCES_SEARCH_ITEM.message
                    BabyDataJson.status_code = message.SUCCES_SEARCH_ITEM.status_code

                    for (const item of resultBaby) {
                        let dadoGender = await SearchIDGender(item.id_sexo)
                        console.log(dadoGender);
                        item.sexo = dadoGender.data[0].sexo
                        delete item.id_sexo

                        let dadoBlood = await SelectIdBlood(item.id_sangue)
                        console.log(dadoBlood);
                        item.tipo_sanguineo = dadoBlood.blood[0].tipo_sanguineo
                        delete item.id_sangue

                        ArrayBaby.push(item)
                    }
                    BabyDataJson.bebe = ArrayBaby
                    console.log(BabyDataJson);
                    
                    return BabyDataJson
                } else {
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