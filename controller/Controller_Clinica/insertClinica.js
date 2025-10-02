/***********************************************************
 * Autor: Eduardo Nascimento
 * Date: 02/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para INSERT Clinica
 ***********************************************************/

import * as message from '../../config/status/status.js'
import {insertSQLClinica} from '../../model/ClinicaDAO/insertClinica.js' 

export const insertClinica = async function (dataClinica, contentType) {
    try {
        
        if (String(contentType).toLocaleLowerCase() === 'application/json') {
            if (
                dataClinica.nome        == null     || dataClinica.nome     == undefined     || dataClinica.nome        == ""    || dataClinica.nome.length     > 100    ||
                dataClinica.cnpj        == null     || dataClinica.cnpj     == undefined     || dataClinica.cnpj        == ""    || dataClinica.cnpj.length     > 20     ||
                dataClinica.telefone    == null     || dataClinica.telefone == undefined     || dataClinica.telefone    == ""    || dataClinica.telefone.length > 15     ||
                dataClinica.email       == null     || dataClinica.email    == undefined     || dataClinica.email       == ""    || dataClinica.email.length    > 100    ||
                dataClinica.id_user     == null     || dataClinica.id_user  == undefined     || dataClinica.id_user     == ""    || isNaN(dataClinica.id_user)
            ) {

                return message.ERROR_REQUIRED_FIELDS
            }else{
                let resultClinica = await insertSQLClinica(dataClinica)

                if(resultClinica){
                    return {
                        ...message.SUCCES_CREATED_ITEM,
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
