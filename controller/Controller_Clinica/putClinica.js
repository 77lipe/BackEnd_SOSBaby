/***********************************************************
 * Autor: Eduardo Nascimento
 * Date: 02/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para UPDATE Clinica
 ***********************************************************/

import * as message from '../../config/status/status.js'
import {updateSQLClinica} from '../../model/ClinicaDAO/PutClinica.js' 

export const updateClinica = async function (dataClinica, contentType) {
    try {
        
        if (String(contentType).toLocaleLowerCase() === 'application/json') {
            if (
                dataClinica.id          == null   || dataClinica.id         == undefined   || dataClinica.id        == ""  || isNaN(dataClinica.id)                   ||
                dataClinica.nome        == null   || dataClinica.nome       == undefined   || dataClinica.nome      == ""  || dataClinica.nome.length       > 100     ||
                dataClinica.cnpj        == null   || dataClinica.cnpj       == undefined   || dataClinica.cnpj      == ""  || dataClinica.cnpj.length       > 20      ||
                dataClinica.telefone    == null   || dataClinica.telefone   == undefined   || dataClinica.telefone  == ""  || dataClinica.telefone.length   > 15      ||
                dataClinica.email       == null   || dataClinica.email      == undefined   || dataClinica.email     == ""  || dataClinica.email.length      > 100     ||
                dataClinica.id_user     == null   || dataClinica.id_user    == undefined   || dataClinica.id_cep    == ""  || isNaN(dataClinica.id_user)
            ) {

                return message.ERROR_REQUIRED_FIELDS
            }else{
                let resultClinica = await updateSQLClinica(dataClinica)

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