/*********************************************************
 * Autor: Felipe Vieira
 * Date: 16/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para INSERT user
 ********************************************************/

import * as message from '../../config/status/status.js'
import { insertSQLResp } from "../../model/ResponsableDAO/InsertResp.js";


export const insertResp = async function (user, contentType) {
    try {

        if(String(contentType).toLocaleLowerCase() === "application/json"){
            if(
                user.nome            == "" || user.nome            == undefined || user.nome            == null || user.nome.length  > 100   ||
                user.data_nascimento == "" || user.data_nascimento == undefined || user.data_nascimento == null || user.data_nascimento.length > 15 ||
                user.cpf             == "" || user.cpf             == undefined || user.cpf             == null || user.cpf.length > 15             ||
                user.cep             == "" || user.cep             == undefined || user.cep             == null || user.cep.length > 20             ||
                user.telefone        == "" || user.telefone        == undefined || user.telefone        == null || user.telefone.length > 20        ||
                user.id_sexo         == "" || user.id_sexo         == undefined || user.id_sexo         == null || isNaN(user.id_sexo)       ||
                user.arquivo         == "" || user.arquivo         == undefined || user.arquivo         == null || user.arquivo.length  > 100       ||
                user.cartao          == "" || user.cartao          == undefined || user.cartao          == null || user.cartao.length   > 45        ||         
                user.id_user         == "" || user.id_user         == undefined || user.id_user         == null || isNaN(user.id_user)   
            ){
                return message.ERROR_REQUIRED_FIELDS
            }else{
                let resultUser = await insertSQLResp(user)

                if(resultUser){
                    return{
                        ...message.SUCCES_CREATED_ITEM,
                        data: resultUser
                    }
                }else{
                    return message.ERROR_INTERNAL_SERVER_MODEL
                }
            }

        }else{
            return message.ERROR_CONTENT_TYPE
        }

    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}