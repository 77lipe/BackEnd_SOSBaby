/*********************************************************
 * Autor: Eduardo Nascimento Couto Luiz
 * Date: 16/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para Listar os sexo
 ********************************************************/

const listarSexo = async function(){
    try {
        //Criando um Objeto JSON
        let dadosSexo = {}

        //Chama a função para retornar as statuss do banco de dados
        let resultSexo = await sexoDAO.selectAllSexo()

        if(resultSexo != false){
            if(resultSexo.length > 0){
                //Cria um JSON para colocar o ARRAY de statuss
                dadosSexo.status = true
                dadosSexo.status_code = 200,
                dadosSexo.items = resultSexo.length
                dadosSexo.sexo = resultSexo

                return dadosSexo

            }else{
                return message.ERROR_NO_FOUND//404
            }
        }else{
            return message.ERROR_INTERNAL_SERVER_MODEL//500
        }
        
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500
    }
    
}