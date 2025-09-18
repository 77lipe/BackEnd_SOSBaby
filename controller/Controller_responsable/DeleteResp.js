/*********************************************************
 * Autor: Felipe Vieira
 * Date: 16/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para DELETE user
 ********************************************************/

const message = require('../../config/status/status.js')
import { deleteUser } from "../../model/ResponsableDAO/DeleteResp.js";
import { idUser } from "../../model/ResponsableDAO/SelectIDResp.js";

const DeleteResp = async function (id) {
    try {

        let IDrecebido = id
        if( IDrecebido == "" || IDrecebido == undefined || IDrecebido == null || isNaN(IDrecebido)){
            return message.ERROR_REQUIRED_FIELDS
        }else{
            
            let resultUser = await idUser(id)
            if(resultUser != false || typeof(resultUser) == 'object'){
                if(resultUser.length > 0){

                    let IdRecebido = await deleteUser(id)
                    if(IdRecebido = true){
                        return message.SUCCES_DELETED_ITEM
                    }else{
                        return message.ERROR_INTERNAL_SERVER_MODEL
                    }
                }else{
                    return message.ERROR_NOT_FOUND
                }
            }else{
                return message.ERROR_INTERNAL_SERVER_MODEL
            }
        }    

    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
    
}