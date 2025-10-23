/***********************************************************
 * Autor: Felipe Vieira
 * Date: 30/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para GET ID Doctor
 ***********************************************************/

import * as message from '../../config/status/status.js'
import { getIdSQLDoctor } from '../../model/DoctorDAO/GetIdDoctor.js'
import { idGender } from '../../model/SexDAO/SelectByIdGender.js'
import {selectSQLIdUser} from '../../model/UserDAO/SelectIDUser.js'

export const getIdDoctor = async function (id) {
    try {

        let idGet = id
        let dadosDoctor = {}
        let doctorArray = []
        
        if (
            idGet == null || idGet == undefined || idGet == "" || isNaN(idGet)
        ){
            return message.ERROR_REQUIRED_FIELDS
        } else {
        
            let resultIdDoctor = await getIdSQLDoctor(idGet)
            if (resultIdDoctor != false && typeof (resultIdDoctor) == 'object') {
                if (resultIdDoctor.length > 0) {
                    console.log(resultIdDoctor);
                    
                    dadosDoctor.message = message.SUCCES_SEARCH_ITEM.message
                    dadosDoctor.status_code = message.SUCCES_SEARCH_ITEM.status_code

                    for (let itemDoctor of resultIdDoctor) {
                        let dadosGender = await idGender(itemDoctor.id_sexo)
                        itemDoctor.sexo = dadosGender

                        let dadosUser = await selectSQLIdUser(itemDoctor.id_user)
                        itemDoctor.usuario = dadosUser

                        doctorArray.push(itemDoctor)
                    }
                    
                    dadosDoctor.medico = doctorArray
                    return dadosDoctor
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