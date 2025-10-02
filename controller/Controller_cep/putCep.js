/***********************************************************
 * Autor: Eduardo Nascimento
 * Date: 02/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para UPDATE Clinica
 ***********************************************************/

import * as message from '../../config/status/status.js'
import {updateSQLCep} from '../../model/CepDAO/PutCep.js' 

export const updateCep = async function (dataCep, contentType) {
    try {
        
        if (String(contentType).toLocaleLowerCase() === 'application/json') {
            if (
                dataCep.id          == null   || dataCep.id         == undefined   || dataCep.id            == ""  || isNaN(dataCep.id)                        ||
                dataCep.cep         == null   || dataCep.cep        == undefined   || dataCep.cep           == ""  || dataCep.cep.length            > 40       ||
                dataCep.logradouro  == null   || dataCep.logradouro == undefined   || dataCep.logradouro    == ""  || dataCep.logradouro.length     > 200      ||
                dataCep.cidade      == null   || dataCep.cidade     == undefined   || dataCep.cidade        == ""  || dataCep.cidade.length         > 100      ||
                dataCep.uf          == null   || dataCep.uf         == undefined   || dataCep.uf            == ""  || dataCep.uf.length             > 30    
            ) {

                return message.ERROR_REQUIRED_FIELDS
            }else{
                let resultCep = await updateSQLCep(dataCep)

                if(resultCep){
                    return {
                        ...message.SUCCES_UPDATE_ITEM,
                        data: resultCep
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