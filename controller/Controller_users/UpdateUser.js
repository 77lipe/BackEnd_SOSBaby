/*********************************************************
 * Autor: Felipe Vieira
 * Date: 16/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para UPDATE user
 ********************************************************/

const message = require('../../config/status/status')



const UpdateUser = async function(id, user, contentType) {  
    try {

        if(String(contentType).toLocaleLowerCase() == 'application/json'){
            if(
                user.email           == "" || user.email           == undefined || user.email           == null || user.email.length > 100   ||
                user.senha           == "" || user.senha           == undefined || user.senha           == null || user.senha.length > 40    ||
                user.nome            == "" || user.nome            == undefined || user.nome            == null || user.nome.lenght  > 100   ||
                user.data_nascimento == "" || user.data_nascimento == undefined || user.data_nascimento == null || user.data_nascimento > 15 ||
                user.cpf             == "" || user.cpf             == undefined || user.cpf             == null || user.cpf > 15             ||
                user.id_cep          == "" || user.id_cep          == undefined || user.id_cep          == null || user.id_cep > 10          ||
                user.id_profissao    == "" || user.id_profissao    == undefined || user.id_profissao    == null || user.id_profissao > 50    ||
                user.telefone        == "" || user.telefone        == undefined || user.telefone        == null || user.telefone > 20
            ){
                return message.ERROR_REQUIRED_FIELDS
            }else{
                let resultUser = await userDAO.selectById(id)

                if (resultUser != false || typeof(resultUser) == 'object'){
                    if(resultUser.lenght > 0){

                        user.id = id
                        let resultID = await userDAO.updateUser(user)
                        
                        if(resultID = true){
                            return message.SUCCES_UPDATE_ITEM
                        }else{
                            return message.ERROR_INTERNAL_SERVER_MODEL
                        }
                    }else{
                        return message.ERROR_NOT_FOUND
                    }
                }
            }
        }else{
            return message.ERROR_CONTENT_TYPE
        }

    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
    
}