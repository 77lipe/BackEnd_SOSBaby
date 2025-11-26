/*********************************************************
 * Autor: Isabelly Lima
 * Date: 23/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para 
 *                            INSERT Clínica
 ********************************************************/

import * as message from '../../config/status/status.js';
import { insertSQLClinica } from '../../model/ClinicaDAO/insertClinica.js';
import { InsertSQLUserConvenio } from '../../model/ConvenioDAO/RelacionConvenioDAO/insertSQLRelacion.js'; // <-- novo DAO

export const insertClinica = async function (clinica, contentType) {
    try {


        if (String(contentType).toLocaleLowerCase() == 'application/json') {
            if (
                !clinica.nome || clinica.nome.length > 100 || clinica.nome.match(/['"]/) ||
                !clinica.cnpj || clinica.cnpj.length > 20 || !clinica.cnpj.match(/^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$/) || clinica.cnpj.match(/['"]/) ||
                !clinica.telefone || clinica.telefone.length > 20 || !clinica.telefone.match(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/) || clinica.telefone.match(/['"]/) ||
                !clinica.email || clinica.email.length > 100 || !clinica.email.match(/^[^\s@'"]+@[^\s@'"]+\.[^\s@'"]+$/) ||
                !clinica.cidade || clinica.cidade.length > 100 || clinica.cidade.match(/['"]/) ||
                !clinica.rua || clinica.rua.length > 150 || clinica.rua.match(/['"]/) ||
                !clinica.bairro || clinica.bairro.length > 100 || clinica.bairro.match(/['"]/) ||
                !clinica.numero || clinica.numero.length > 100 || clinica.numero.match(/['"]/) ||
                !clinica.id_user || isNaN(clinica.id_user) ||

           
                !clinica.id_convenio ||
                !Array.isArray(clinica.id_convenio) ||
                clinica.id_convenio.length === 0 ||
                clinica.id_convenio.some(id => isNaN(id))
            ){
                return message.ERROR_REQUIRED_FIELDS;
            }else{

                let resultInsertClinica = await insertSQLClinica(clinica);
                //console.log(resultInsertClinica);
        
                if (!resultInsertClinica) {
                    return message.ERROR_INTERNAL_SERVER;
                }

                let id_user = resultInsertClinica.id_user;
                let conveniosArray = []
                for (let idConvenio of clinica.id_convenio) {
                    var resultConvenio = await InsertSQLUserConvenio({
                        id_user: id_user,
                        id_convenio: idConvenio
                    });

                    conveniosArray.push(resultConvenio)
                }
                console.log(resultConvenio);
                
                if(resultConvenio){
                    return {
                        status_code: message.SUCCES_CREATED_ITEM.status_code,
                        message: message.SUCCES_CREATED_ITEM.message,
                        data: resultInsertClinica,
                        Convenios: conveniosArray
                    }
                }
            }
        }else{
            return message.ERROR_CONTENT_TYPE;
        }

        

    } catch (error) {
        console.log(error);
        return message.ERROR_INTERNAL_SERVER_CONTROLLER;
    }
};
