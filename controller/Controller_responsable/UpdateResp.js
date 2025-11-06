/*********************************************************
 * Autor: Felipe Vieira
 * Date: 16/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para UPDATE user
 ********************************************************/

import * as message from '../../config/status/status.js'
import { idResp } from "../../model/ResponsableDAO/SelectIDResp.js"
import { updateResp } from "../../model/ResponsableDAO/PutResp.js"


export const UpdateResp = async function(id, user, contentType) {  
    try {

        if(String(contentType).toLocaleLowerCase() == 'application/json'){
            if(
                user.nome                   == "" || user.nome                  == undefined || user.nome            == null || user.nome.length  > 100          || !user.nome.match(/^[A-Za-zÀ-ÿ\s]+$/)                 ||
                user.data_nascimento        == "" || user.data_nascimento       == undefined || user.data_nascimento == null || user.data_nascimento.length > 15 ||
                user.cpf                    == "" || user.cpf                   == undefined || user.cpf             == null || user.cpf.length > 15             || !user.cpf.match(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/)    ||
                user.cep                    == "" || user.cep                   == undefined || user.cep             == null || user.cep.length > 20             ||
                user.telefone               == "" || user.telefone              == undefined || user.telefone        == null || user.telefone.length > 20        || !user.telefone.match(/^\(\d{2}\)\s?\d{4,5}-?\d{4}$/) ||
                user.id_sexo                == "" || user.id_sexo               == undefined || user.id_sexo         == null || isNaN(user.id_sexo)              ||
                user.arquivo                == "" || user.arquivo               == undefined || user.arquivo         == null || user.arquivo.length  > 3000      ||
                user.cartao_medico          == "" || user.cartao_medico         == undefined || user.cartao_medico   == null || user.cartao_medico.length   > 45 ||         
                user.id_user                == "" || user.id_user               == undefined || user.id_user         == null || isNaN(user.id_user)   
            ){
                return message.ERROR_REQUIRED_FIELDS
            }else{
                let resultUser = await idResp(id)

                if (resultUser != false || typeof(resultUser) == 'object'){
                    if(resultUser.lenght > 0){

                        user.id = id
                        let resultID = await updateResp(user)
                        
                        if(resultID){
                            return message.SUCCES_UPDATE_ITEM
                        }else{
                            return message.ERROR_INTERNAL_SERVER_MODEL
                        }
                    }else{
                        return message.ERROR_NOT_FOUND
                    }
                }
            }
        }else{
            return message.ERROR_CONTENT_TYPE
        }

    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
    
}