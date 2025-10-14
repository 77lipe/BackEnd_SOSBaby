/***********************************************************
 * Autor: Felipe Vieira
 * Date: 18/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para GET ALL Doctor
 ***********************************************************/
import * as message from '../../config/status/status.js'
import { getAllSQLDoctor } from '../../model/DoctorDAO/GetAllDoctor.js'
import { selectSQLIdUser } from '../../model/UserDAO/SelectIDUser.js'
import { idGender } from '../../model/SexDAO/SelectByIdGender.js'

export const getAllDoctor = async function () {
    try {

        let doctorArray = []
        let doctorJson = {}

        let resultAllDoctor = await getAllSQLDoctor()
        if (resultAllDoctor != false || typeof(resultAllDoctor) == 'object') {
            if (resultAllDoctor.length > 0) {
                doctorJson.message = message.SUCCES_SEARCH_ITEM
                doctorJson.items = resultAllDoctor.length
                doctorJson.medicos = resultAllDoctor

                for (item of resultAllDoctor) {
                    let dadoUser = await selectSQLIdUser(item.id_user)
                    item.usuario = dadoUser.id_user

                    let dadoGender = await idGender(item.id_sexo)
                    item.sexo = dadoGender.id_sexo

                    doctorArray.push(item)
                }
                doctorJson.tipo_usuario = doctorArray
                return doctorJson

            } else {
                 return message.ERROR_NOT_FOUND
            }
        } else {
             return message.ERROR_INTERNAL_SERVER_MODEL
        }
    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER 
    }
}