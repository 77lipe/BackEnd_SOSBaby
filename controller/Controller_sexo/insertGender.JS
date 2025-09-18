<<<<<<< HEAD
/*********************************************************
 * Autor: Eduardo Nascimento Couto Luiz
 * Date: 16/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para INSERT sexo
 ********************************************************/

const message = require('../../config/status/status')
import { insertSQLGender } from "../../model/TypeUserDAO/insertTypeUser";

const insertGender = async function (sex, contentType) {
    try {

        if(String(contentType).toLowerCase() = "application/json"){
            if(
                sex.sexo          == "" || sex.sexo           == undefined || sex.sexo           == null || sex.sexo.length > 20   
             
            ){
                return message.ERROR_REQUIRED_FIELDS
            }else{
                let resultUser = await insertSQLGender(sex)

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
=======
>>>>>>> 16cc315582b37f59444c34def45bb10258814fe6
