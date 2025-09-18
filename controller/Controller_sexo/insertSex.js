/*********************************************************
 * Autor: Eduardo Nascimento Couto Luiz
 * Date: 18/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para INSERT sexo
 ********************************************************/

 const message = require('../../config/status/status.js')
 import { insertSQLSex } from "../../model/SexDAO/insertSex";
 
 const insertSex = async function (sex, contentType) {
     try {
 
         if(String(contentType).toLowerCase() = "application/json"){
             if(
                 sex.sexo          == "" || sex.sexo           == undefined || sex.sexo           == null || sex.sexo.length > 20   
              
             ){
                 return message.ERROR_REQUIRED_FIELDS
             }else{
                 let resultUser = await insertSQLSex(sex)
 
                 if(resultUser = true){
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