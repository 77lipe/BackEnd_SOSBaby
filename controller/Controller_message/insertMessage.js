/*********************************************************
 * Autor: Felipe Vieira
 * Date: 21/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para 
 *                            INSERT do Mensagem
 ********************************************************/

import * as message from '../../config/status/status.js'
import { postSQLMessage } from "../../model/MessageDAO/postSQLMessage.js";

export const insertMessage = async function (dataMessage, contentType){
    try {
        
        if(String(contentType).toLocaleLowerCase() == 'application/json'){
            if(
                dataMessage.conteudo    == null || dataMessage.conteudo == ''   || dataMessage.conteudo == undefined || dataMessage.conteudo.length > 500 ||
                dataMessage.id_chat     == null || dataMessage.id_chat == ''    || dataMessage.id_chat  == undefined || isNaN(dataMessage.id_chat)        ||
                dataMessage.id_user     == null || dataMessage.id_user == ''    || dataMessage.id_user  == undefined || isNaN(dataMessage.id_user) 
            ){
                return message.ERROR_REQUIRED_FIELDS
            }else{

                let resultInsert = await postSQLMessage(dataMessage)
                if(resultInsert){
                    return {
                        ...message.SUCCES_CREATED_ITEM,
                        data: resultInsert
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