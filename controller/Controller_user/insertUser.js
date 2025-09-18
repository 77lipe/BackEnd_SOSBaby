/*********************************************************
 * Autor: Felipe Vieira
 * Date: 18/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para INSERT user
 ********************************************************/

const message = require('../../config/status/status.js')
import { insertSQLUser } from "../../model/UserDAO/InsertUser.js";

const insertUser = async function (user,contentType) {
    try {
        if (String(contentType).toLocaleLowerCase == 'application/json') {
            if(
                user.email   == "" || user.email   == undefined || user.email   == null || user.email > 100 ||
                user.senha   == "" || user.senha   == undefined || user.senha   == null || user.senha > 45  ||
                user.id_tipo == "" || user.id_tipo == undefined || user.id_tipo == null || isNaN(user.id_tipo)
               ){ 
                return message.ERROR_REQUIRED_FIELDS
               }else{
                   let resultUser = await insertSQLUser(user)
       
                   if (resultUser == true) {
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
        console.log(error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER;
    }
    
}