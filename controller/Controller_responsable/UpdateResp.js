/*********************************************************
 * Autor: Felipe Vieira
 * Date: 16/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para UPDATE user
 ********************************************************/

import * as message from '../../config/status/status.js'
import { idUser } from "../../model/ResponsableDAO/SelectIDResp.js"
import { updateUser } from "../../model/ResponsableDAO/PutResp.js"


export const UpdateResp = async function(id, user, contentType) {  
    try {

        if(String(contentType).toLocaleLowerCase() == 'application/json'){
            if(
                user.nome            == "" || user.nome            == undefined || user.nome            == null || user.nome.lenght  > 100   ||
                user.data_nascimento == "" || user.data_nascimento == undefined || user.data_nascimento == null || user.data_nascimento > 15 ||
                user.cpf             == "" || user.cpf             == undefined || user.cpf             == null || user.cpf > 15             ||
                user.cep             == "" || user.cep             == undefined || user.cep             == null || user.cep > 10             ||
                user.telefone        == "" || user.telefone        == undefined || user.telefone        == null || user.telefone > 20        ||
                user.id_user         == "" || user.id_user         == undefined || user.id_user         == null || isNaN(user.id_user)       ||
                user.arquivo         == "" || user.arquivo         == undefined || user.arquivo         == null || user.arquivo  > 100       ||
                user.cartao          == "" || user.cartao          == undefined || user.cartao          == null || user.cartao   > 45        || 
                user.id_sexo         == "" || user.id_sexo         == undefined || user.id_sexo         == null || isNaN(user.id_sexo)   
            ){
                return message.ERROR_REQUIRED_FIELDS
            }else{
                let resultUser = await idUser(id)

                if (resultUser != false || typeof(resultUser) == 'object'){
                    if(resultUser.lenght > 0){

                        user.id = id
                        let resultID = await updateUser(user)
                        
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