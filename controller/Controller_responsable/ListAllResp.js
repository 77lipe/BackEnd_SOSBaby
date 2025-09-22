/*******************************************************************
 * Autor: Felipe Vieira
 * Date: 16/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para Listar todos os  users
 *******************************************************************/

import * as message from '../../config/status/status.js'
import { ListSQLresps } from "../../model/ResponsableDAO/ListAllResp.js";
import { selectSQLIdUser } from '../../model/UserDAO/SelectIDUser.js';

export const ListAllResp = async function() {
    try {

        let responsArray = []
        let responDataJson = {}

        let resultResps = await ListSQLresps()
        if (resultResps =! false) {
            if (resultResps.length > 0) {
                responDataJson.message = message.SUCCES_SEARCH_ITEM
                responDataJson.items = resultResps.length

                for(item of resultResps){
                    let dadoUser = await selectSQLIdUser(item.id_user)
                    item.usuario = dadoUser.id_tipo

                    responsArray.push(item)
                }
                responDataJson.responsaveis = responsArray
                return responDataJson
            }else{
                return message.ERROR_NOT_FOUND
            }
        }else{
            return message.ERROR_INTERNAL_SERVER_MODEL
        }



    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER;    
    }
}