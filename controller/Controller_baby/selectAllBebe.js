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
        
        let ArrayBaby = []
        let BabyDataJson = {}

        let resultBaby = await ListSQLBaby()
        if (resultBaby != false) {
            if (resultBaby.length > 0) {
                BabyDataJson.message = message.SUCCES_SEARCH_ITEM
                BabyDataJson.items = resultBaby.length
                BabyDataJson.bebes = resultBaby

                for (let item of resultBaby) {
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
            
        }else{
            return message.ERROR_INTERNAL_SERVER_MODEL
        }


    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER;
    }
}
