/***********************************************************
 * Autor: Felipe Vieira
 * Date: 30/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para UPDATE Doctor
 ***********************************************************/

import * as message from '../../config/status/status.js'
import {updateSQLDoctor} from '../../model/DoctorDAO/PutDoctor.js' 

export const updateDoctor = async function (dataDoctor, contentType) {
    try {
        
        if (String(contentType).toLocaleLowerCase() === 'application/json') {
            if (
                dataDoctor.nome == null     || dataDoctor.nome == undefined     || dataDoctor.nome == ""     || dataDoctor.nome.length > 100    || dataDoctor.nome.match(/^[A-Za-zÀ-ÿ\s]+$/) ||
                dataDoctor.email == null    || dataDoctor.email == undefined    || dataDoctor.email == ""    || dataDoctor.email.length > 100   ||
                dataDoctor.crm == null      || dataDoctor.crm == undefined      || dataDoctor.crm == ""      || dataDoctor.crm.length > 15      ||
                dataDoctor.telefone == null || dataDoctor.telefone == undefined || dataDoctor.telefone == "" || dataDoctor.telefone.length > 15 || dataDoctor.telefone.match(/^\(\d{2}\)\s?\d{4,5}-?\d{4}$/) ||
                dataDoctor.cpf == null      || dataDoctor.cpf == undefined      || dataDoctor.cpf == ""      || dataDoctor.cpf.length > 11      || dataDoctor.cpf.match(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/)    ||
                dataDoctor.foto == null     || dataDoctor.foto == undefined     || dataDoctor.foto == ""      || dataDoctor.foto.length > 15000 ||
                dataDoctor.id_sexo == null  || dataDoctor.id_sexo == undefined  || dataDoctor.id_sexo == ""  || isNaN(dataDoctor.id_sexo)       ||
                dataDoctor.id_user == null  || dataDoctor.id_user == undefined  || dataDoctor.id_sexo == ""  || isNaN(dataDoctor.id_user)
            ) {

                return message.ERROR_REQUIRED_FIELDS
            }else{
                let resultUpdateDoctor = await updateSQLDoctor(dataDoctor)

                if(resultUpdateDoctor){
                    return {
                        ...message.SUCCES_UPDATE_ITEM,
                        data: resultUpdateDoctor
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