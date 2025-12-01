/*********************************************************
 * Autor: Felipe Vieira dos Santos
 * Date: 27/11/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para 
 *                            INSERT Clínica
 ********************************************************/

import * as message from '../../config/status/status.js';

import { insertSQLClinica } from '../../model/ClinicaDAO/insertClinica.js';
import { InsertSQLUserConvenio } from '../../model/ConvenioDAO/RelacionConvenioDAO/insertSQLRelacion.js';

// NOVOS IMPORTS
import { SelectIdSQLEspecialidade } from '../../model/SpecialtyDAO/getIdSQLSpecialty.js';
import { insertSQLRelacionEspecialidade } from '../../model/SpecialtyDAO/RelacionSpecialtyDAO/inserRelacionamenoSpecialty.js';

export const insertClinica = async function (clinica, contentType) {
    try {

        if (String(contentType).toLowerCase() === 'application/json') {

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
                clinica.id_convenio.some(id => isNaN(id)) ||

     
                !clinica.id_especialidade ||
                !Array.isArray(clinica.id_especialidade) ||
                clinica.id_especialidade.length === 0 ||
                clinica.id_especialidade.some(id => isNaN(id))
            ) {

                return message.ERROR_REQUIRED_FIELDS;

            } else {


                for (let idEsp of clinica.id_especialidade) {
                    let exists = await SelectIdSQLEspecialidade(idEsp);

                    if (!exists) {
                        return {
                            status: 404,
                            status_code: 404,
                            message: `A especialidade com id ${idEsp} não existe.`
                        }
                    }
                }


                let resultInsertClinica = await insertSQLClinica(clinica);
                console.log(resultInsertClinica)

                if (!resultInsertClinica) {
                    return message.ERROR_INTERNAL_SERVER_MODEL;
                }

                let id_user = resultInsertClinica.id_user
                let id_clinica = resultInsertClinica.id_clinica


                let conveniosArray = [];

                for (let idConvenio of clinica.id_convenio) {
                    var resultConvenio = await InsertSQLUserConvenio({
                        id_user: id_user,
                        id_convenio: idConvenio
                    });

                    conveniosArray.push(resultConvenio);
                }


                let especialidadesArray = [];

                for (let idEsp of clinica.id_especialidade) {

                    let relacionamento = await insertSQLRelacionEspecialidade({
                        id_clinica: id_clinica,
                        id_especialidade: idEsp
                    });

                    

                    if (!relacionamento) {
                        return message.ERROR_INTERNAL_SERVER_MODEL;
                    }

                    especialidadesArray.push(relacionamento);
                }


                if (resultConvenio) {
                    return {
                        status_code: message.SUCCES_CREATED_ITEM.status_code,
                        message: message.SUCCES_CREATED_ITEM.message,
                        data: resultInsertClinica,
                        Convenios: conveniosArray,
                        Especialidades: especialidadesArray
                    }
                }
            }

        } else {
            return message.ERROR_CONTENT_TYPE;
        }

    } catch (error) {
        console.log(error);
        return message.ERROR_INTERNAL_SERVER_CONTROLLER;
    }
};

