/*********************************************************
 * Autor: Eduardo Nascimento
 * Date: 02/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para INSERT Especialidade
 ********************************************************/

 import * as message from '../../../BackEnd_SOSBaby/config/status/status.js'
 import { insertSQLEspec } from "../../../BackEnd_SOSBaby/model/EspecialidadeDAO/InsertEspec";
 
 
 export const insertEspec = async function (especialidade, contentType) {
     try {
 
         if(String(contentType).toLocaleLowerCase() === "application/json"){
             if(
                 especialidade.especialidade            == "" || especialidade.especialidade            == undefined || especialidade.especialidade            == null || especialidade.especialidade.length  > 100  
             ){
                 return message.ERROR_REQUIRED_FIELDS
             }else{
                 let resultespecialidade = await insertSQLEspec(especialidade)
 
                 if(resultespecialidade){
                     return{
                         ...message.SUCCES_CREATED_ITEM,
                         data: resultespecialidade
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