/*********************************************************
 * Autor: Eduardo Nascimento Couto Luiz
 * Date: 18/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para INSERT sexo
 ********************************************************/

import * as message from '../../config/status/status.js'
import { insertClinica } from "../../model/SexDAO/insertGender.js";
 
 export const insertClinica = async function (clinica, contentType) {
     try {
 
         if(String(contentType).toLowerCase() === "application/json"){
             if(
                clinica.nome          == "" ||  clinica.nome           == undefined || clinica.nome           == null || clinica.nome.length          > 100 ||
                clinica.cnpj          == "" ||  clinica.cnpj           == undefined || clinica.cnpj           == null || clinica.cnpj.length          > 20  ||
                clinica.telefone      == "" ||  clinica.telefone       == undefined || clinica.telefone       == null || clinica.telefone.length      > 20  ||
                clinica.email         == "" ||  clinica.email          == undefined || clinica.email          == null || clinica.email.length         > 20  ||
                clinica.id_cep        == "" ||  clinica.id_cep         == undefined || clinica.id_cep         == null || isNaN(clinica.id_cep)              ||
                clinica.id_user       == "" ||  clinica.id_user        == undefined || clinica.id_user        == null || isNaN(clinica.id_user)             ||
             ){
                 return message.ERROR_REQUIRED_FIELDS
             }else{

                 let resultUser = await insertClinica(sex)
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
        console.log(error);
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
     }
 }