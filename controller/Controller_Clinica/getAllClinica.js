/***********************************************************
 * Autor: Eduardo Nascimento
 * Date: 02/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para GET ALL Clinica
 ***********************************************************/
import * as message from '../../config/status/status.js'
import { ListSQLClinica } from '../../model/ClinicaDAO/ListAllClinica.js'
import { selectSQLIdUser } from '../../model/UserDAO/SelectIDUser.js'

export const getAllClinica = async function () {
    try {

        let clinicaArray = []
        let clinicaJSON = {}

        let resultClinica = await ListSQLClinica()
        if (resultClinica != false || typeof(resultClinica) == 'object') {
            if (resultClinica.length > 0) {
                clinicaJSON.message = message.SUCCES_SEARCH_ITEM
                clinicaJSON.items = resultClinica.length
                clinicaJSON.clinicas = resultClinica

                for (item of resultClinica) {
                    let dadoUser = await selectSQLIdUser(item.id_user)
                    item.usuario = dadoUser.id_tipo

                    clinicaArray.push(item)
                }
                clinicaJSON.tipo_usuario = clinicaArray
                return clinicaJSON

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