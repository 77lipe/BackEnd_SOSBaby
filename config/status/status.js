/**************************************************
 * Autor: Felipe Vieira
 * Date: 16/09/25
 * Versão: 1.0
 * Desc: App que irá conter as Mensagens de erros:
 *                                   - Status Code
 **************************************************/


/****************************MENSAGENS DE ERROR******************************/
export const ERROR_REQUIRED_FIELDS = {status:false, status_code: 400, message: "Não foi possível realizar a requisição, pois existem campos obrigatórios que não foram preenchidos ou não atendem."}
export const ERROR_INTERNAL_SERVER = {status:false, status_code: 500, message: "Erro interno no servidor, não foi possível processar a requisição" }
export const ERROR_INTERNAL_SERVER_MODEL = {status: false, status_code: 500, message:"Devido a erros internos no servidor da model, não foi possível processar a requisição"}
export const ERROR_INTERNAL_SERVER_CONTROLLER = {status: false, status_code: 500, message:"Devido a erros internos no servidor da controller, não foi possível processar a requisição"}
export const ERROR_CONTENT_TYPE = {status: false, status_code: 415, message: "Não foi possivel processar a requisição, pois o tipo de dado encaminhado não é processado pelo servidor. Encaminhe dados apenas no formato JSON"}
export const ERROR_NOT_FOUND = {status: false, status_code: 404, message:"Serviço não encontrado, Nenhum retorno encontrado"}
export const ERROR_INCORRECT_LOGIN = {status: false, status_code: 404, message:"Seu Login não foi autorizado!!"}
export const ERROR_INVALID_TOKEN = {status: false, status_code: 404, message:"Token INVÁLIDO!!"}
export const ERROR_INVALID_QUESTION = {status: false, status_code: 404, message:"Erro ao enviar sua pergunta!!"}
export const ERROR_ACCES_DENIED = {status: false, status_code: 404, message:"Acesso negado a esse tipo de usuário!!"}



/****************************MENSAGENS DE SUCESSO******************************/
export const SUCCES_CREATED_ITEM = {status: true, status_code: 201, message:"Item Criado com sucesso!!"}
export const SUCCES_DELETED_ITEM = {status: true, status_code: 200, message:"Item excluído com sucesso!!"}
export const SUCCES_UPDATE_ITEM = {status: true, status_code: 200, message:"Item atualizado com sucesso!!"}
export const SUCCES_SEARCH_ITEM = {status: true, status_code: 200, message:"Procura realizada com sucesso!!"}
export const SUCCES_LOGIN_COMPLETED = {status: true, status_code: 200, message:"Login realizado com sucesso!!"}
export const SUCCES_PASSWORD_RESET = {status: true, status_code:200, message:"Senha atualizada com sucesso!!"}
export const SUCCES_EMAIL_SENT = {status: true, status_code:200, message:"Email enviado!! Verifique seu Gmail."}
export const SUCCES_QUESTION_SENT = {status: true, status_code:200, message:"Pergunta enviada com Sucesso!!"}
export const SUCCES_ACCESS_PERMITION = {status: true, status_code:200, message:"Acesso permitido!!"}