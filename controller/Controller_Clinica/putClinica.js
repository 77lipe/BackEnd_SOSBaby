/***********************************************************
 * Autor: Eduardo Nascimento
 * Date: 02/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para UPDATE Clinica
 ***********************************************************/

import * as message from '../../config/status/status.js'
import {updateClinica} from '../../model/ClinicaDAO/PutClinica.js' 

export const UpdateClinica = async function (clinica, contentType) {
    try {
        
        if (String(contentType).toLocaleLowerCase() === 'application/json') {
            if (
                clinica.id          == undefined || clinica.id        == null || clinica.id       == "" || isNaN(clinica.id)                 ||
                clinica.nome        == undefined || clinica.nome      == null || clinica.nome     == '' || clinica.nome.length      > 100    ||
                clinica.cnpj        == undefined || clinica.cnpj      == null || clinica.cnpj     == '' || clinica.cnpj.length      > 20     ||
                clinica.telefone    == undefined || clinica.telefone  == null || clinica.telefone == '' || clinica.telefone.length  > 20     ||
                clinica.email       == undefined || clinica.email     == null || clinica.email    == '' || clinica.email.length     > 100    ||
                clinica.cidade      == undefined || clinica.cidade    == null || clinica.cidade   == '' || clinica.cidade.length    > 100    ||
                clinica.rua         == undefined || clinica.rua       == null || clinica.rua      == '' || clinica.rua.length       > 150    ||
                clinica.bairro      == undefined || clinica.bairro    == null || clinica.bairro   == '' || clinica.bairro.length    > 100    ||
                clinica.numero      == undefined || clinica.numero    == null || clinica.numero   == '' || clinica.numero.length    > 100    ||
                clinica.id_user     == undefined || clinica.id_user   == null || clinica.id_user  == '' || isNaN(clinica.id_user)   
            ) {

                return message.ERROR_REQUIRED_FIELDS
            }else{
                let resultClinica = await updateClinica(clinica)

                if(resultClinica){
                    return {
                        ...message.SUCCES_UPDATE_ITEM,
                        data: resultClinica
                    }
                }else{
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