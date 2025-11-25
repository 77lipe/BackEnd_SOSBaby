/*********************************************************
 * Autor: Felipe Vieira
 * Date: 16/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para INSERT user
 ********************************************************/

import * as message from '../../config/status/status.js'
import { insertSQLResp } from "../../model/ResponsableDAO/InsertResp.js";
import { SelectIdSQLConvenio } from "../../model/ConvenioDAO/getIdSQLConvenio.js"
import { InsertSQLUserConvenio } from "../../model/ConvenioDAO/RelacionConvenioDAO/insertSQLRelacion.js"


export const insertResp = async function (user, contentType) {
    try {

        if(String(contentType).toLocaleLowerCase() === "application/json"){
            if(
                user.nome                   == "" || user.nome                  == undefined || user.nome            == null || user.nome.length  > 100          || !user.nome.match(/^[A-Za-zÀ-ÿ\s]+$/)                 ||
                user.data_nascimento        == "" || user.data_nascimento       == undefined || user.data_nascimento == null || user.data_nascimento.length > 15 ||
                user.cpf                    == "" || user.cpf                   == undefined || user.cpf             == null || user.cpf.length > 15             || !user.cpf.match(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/)    ||
                user.cep                    == "" || user.cep                   == undefined || user.cep             == null || user.cep.length > 20             ||
                user.telefone               == "" || user.telefone              == undefined || user.telefone        == null || user.telefone.length > 20        || !user.telefone.match(/^\(\d{2}\)\s?\d{4,5}-?\d{4}$/) ||
                user.id_sexo                == "" || user.id_sexo               == undefined || user.id_sexo         == null || isNaN(user.id_sexo)              ||
                user.arquivo                == "" || user.arquivo               == undefined || user.arquivo         == null || user.arquivo.length  > 3000      ||
                user.cartao_medico          == "" || user.cartao_medico         == undefined || user.cartao_medico   == null || user.cartao_medico.length   > 45 ||         
                user.id_user                == "" || user.id_user               == undefined || user.id_user         == null || isNaN(user.id_user)              ||
                user.id_convenio               == undefined || user.id_convenio           == null || user.id_convenio            == '' || isNaN(user.id_convenio) 
            ){
                return message.ERROR_REQUIRED_FIELDS
            }else{

                let resultConvenio = await SelectIdSQLConvenio(user.id_convenio)
                if(resultConvenio){
                    console.log("Convenio existente:", resultConvenio);
                    
                    let resultUser = await insertSQLResp(user)

                    let IdsRelacion = {
                        id_convenio: resultConvenio[0].id_convenio,
                        id_user: resultUser.id_user
                    }
                    console.log(IdsRelacion);
                    

                    let resultRelacionamento = await InsertSQLUserConvenio(IdsRelacion)
                    if(resultRelacionamento){
                        console.log("Relacionamento Criado:", resultRelacionamento);

                        if(resultUser){
                            console.log("User Criado:", resultUser);
                            return{
                                ...message.SUCCES_CREATED_ITEM,
                                data: resultUser
                            }
                        }else{
                            return message.ERROR_INTERNAL_SERVER_MODEL
                        }
                    }else{
                        console.log("ERROR AO CRIAR O RELACIONAMENTO");
                        return message.ERROR_INTERNAL_SERVER_MODEL
                    }
    
                }else{
                    console.log("ERROR AO VERIFICAR CONVENIO");
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