/*********************************************************
 * Autor: Isabelly Lima
 * Date: 23/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para 
 *                            INSERT Clínica
 ********************************************************/

import * as message from '../../config/status/status.js'
import {insertSQLClinica} from '../../model/ClinicaDAO/insertClinica.js'

export const insertClinica = async function (clinica, contentType) {
    try {       
        
        if (String(contentType).toLocaleLowerCase() == 'application/json') {
            if (
                clinica.nome        == undefined || clinica.nome      == null || clinica.nome     == '' || clinica.nome.length      > 100    ||
                clinica.cnpj        == undefined || clinica.cnpj      == null || clinica.cnpj     == '' || clinica.cnpj.length      > 20     ||
                clinica.telefone    == undefined || clinica.telefone  == null || clinica.telefone == '' || clinica.telefone.length  > 20     ||
                clinica.email       == undefined || clinica.email     == null || clinica.email    == '' || clinica.email.length     > 100    ||
                clinica.cidade      == undefined || clinica.cidade    == null || clinica.cidade   == '' || clinica.cidade.length    > 100    ||
                clinica.rua         == undefined || clinica.rua       == null || clinica.rua      == '' || clinica.rua.length       > 150    ||
                clinica.bairro      == undefined || clinica.bairro    == null || clinica.bairro   == '' || clinica.bairro.length    > 100    ||
                clinica.numero      == undefined || clinica.numero    == null || clinica.numero   == '' || clinica.numero.length    > 100    ||
                clinica.id_user     == undefined || clinica.id_user   == null || clinica.id_user  == '' || isNaN(clinica.id_user)                   
            ){
                return message.ERROR_REQUIRED_FIELDS                
            }else{

                let resultInsertClinica = await insertSQLClinica(clinica)

                if(resultInsertClinica){
                    return {
                        ...message.SUCCES_CREATED_ITEM,
                        data: clinica
                    }
                }else{
                    return message.ERROR_INTERNAL_SERVER

                }
            }
        }else{
            return message.ERROR_CONTENT_TYPE
        }   

    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER    
        }

}