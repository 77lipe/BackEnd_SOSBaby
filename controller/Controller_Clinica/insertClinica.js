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
                !clinica.nome || clinica.nome.length > 100 || clinica.nome.match(/['"]/) ||
                !clinica.cnpj || clinica.cnpj.length > 20  || !clinica.cnpj.match(/^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$/) || clinica.cnpj.match(/['"]/) ||
                !clinica.telefone || clinica.telefone.length > 20 || !clinica.telefone.match(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/) || clinica.telefone.match(/['"]/) ||
                !clinica.email || clinica.email.length > 100 || !clinica.email.match(/^[^\s@'"]+@[^\s@'"]+\.[^\s@'"]+$/) ||
                !clinica.cidade || clinica.cidade.length > 100 || clinica.cidade.match(/['"]/) ||
                !clinica.rua || clinica.rua.length > 150 || clinica.rua.match(/['"]/) ||
                !clinica.bairro || clinica.bairro.length > 100 || clinica.bairro.match(/['"]/) ||
                !clinica.numero || clinica.numero.length > 100 || clinica.numero.match(/['"]/) ||
                !clinica.id_user || isNaN(clinica.id_user) ||
                clinica.convenio               == undefined || clinica.convenio           == null || clinica.convenio            == '' || isNaN(clinica.convenio) 
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