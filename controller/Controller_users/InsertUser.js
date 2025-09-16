/*********************************************************
 * Autor: Felipe Vieira
 * Date: 16/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para INSERT user
 ********************************************************/

const message = require('../../config/status/status')


const insertUser = async function (user, contentType) {
    try {

        if(String(contentType).toLocaleLowerCase() = "application/json"){
            if(
                user.email           == "" || user.email           == undefined || user.email           == null || user.email.length > 100   ||
                user.senha           == "" || user.senha           == undefined || user.senha           == null || user.senha.length > 40    ||
                user.nome            == "" || user.nome            == undefined || user.nome            == null || user.nome.lenght  > 100   ||
                user.data_nascimento == "" || user.data_nascimento == undefined || user.data_nascimento == null || user.data_nascimento > 15 ||
                user.cpf             == "" || user.cpf             == undefined || user.cpf             == null || user.cpf > 15             ||
                user.cep             == "" || user.cep             == undefined || user.cep             == null || user.cep > 20             ||
                user.telefone        == "" || user.telefone        == undefined || user.telefone        == null || user.telefone > 20        ||
                user.id_sexo         == "" || user.id_sexo         == undefined || user.id_sexo         == null || isNaN(user.id_sexo)     
            ){
                return message.ERROR_REQUIRED_FIELDS
            }else{
                let resultUser = await userDAO(user)

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