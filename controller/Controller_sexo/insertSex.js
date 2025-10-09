/*********************************************************
 * Autor: Eduardo Nascimento Couto Luiz
 * Date: 18/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para INSERT sexo
 ********************************************************/

import * as message from '../../config/status/status.js'
import { insertSQLGender } from "../../model/SexDAO/insertGender.js";
 
 export const insertSex = async function (sex, contentType) {
     try {
 
         if(String(contentType).toLowerCase() === "application/json"){
             if(
                 sex.sexo          == "" || sex.sexo           == undefined || sex.sexo           == null || sex.sexo.length > 12   
              
             ){
                 return message.ERROR_REQUIRED_FIELDS
             }else{

                let resultUser = await insertSQLGender(sex)
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