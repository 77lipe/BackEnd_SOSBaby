/**************************************************
 * Autor: Felipe Vieira
 * Date: 16/09/25
 * Versão: 1.0
 * Desc: App que irá conter as Mensagens de erros:
 *                                   - Status Code
 **************************************************/


/****************************MENSAGENS DE ERROR******************************/
const ERROR_REQUIRED_FIELDS = {status:false, status_code: 400, message: "Não foi possível realizar a requisição, pois existem campos obrigatórios que não foram preenchidos ou não atendem."}
const ERROR_INTERNAL_SERVER = {status:false, status_code: 500, message: "Erro interno no servidor, não foi possível processar a requisição" }
const ERROR_INTERNAL_SERVER_MODEL = {status: false, status_code: 500, message:"Devido a erros internos no servidor da model, não foi possível processar a requisição"}
const ERROR_INTERNAL_SERVER_CONTROLLER = {status: false, status_code: 500, message:"Devido a erros internos no servidor da controller, não foi possível processar a requisição"}
const ERROR_CONTENT_TYPE = {status: false, status_code: 415, message: "Não foi possivel processar a requisição, pois o tipo de dado encaminhado não é processado pelo servidor. Encaminhe dados apenas no formato JSON"}


const code = {
    succes: [
        400,
        "Não foi possível realizar a requisição, pois existem campos obrigatórios que não foram preenchidos ou não atendem"
    ]
    
    


}