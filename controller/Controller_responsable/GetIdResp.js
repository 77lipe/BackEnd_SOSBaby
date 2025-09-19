/*********************************************************
 * Autor: Felipe Vieira
 * Date: 16/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para BUSCAR um 
 *       responsável específico
 ********************************************************/

import * as message from '../../config/status/status.js'
import { idResp } from "../../model/ResponsableDAO/SelectIDResp.js";
import { selectSQLIdUser } from "../../model/UserDAO/SelectIDUser.js";

export const searchIDResp = async function (id) {
    try {
        let idGet = id
        let respArray = []
        let dadosResp = {}
        
        if (idGet == undefined || idGet == null || idGet == "" || isNaN(idGet)) {
            return message.ERROR_REQUIRED_FIELDS
        }else{

            let resultResp = await idResp(idGet)
            if (resultResp != false || typeof(resultResp) == 'object') {
                if (resultResp.length > 0) {
                    dadosResp.message = message.SUCCES_SEARCH_ITEM

                    for(itemRespon of resultResp){
                        let dadosUser = await selectSQLIdUser(id_user)
                        itemRespon.usuario = dadosUser

                        respArray.push(itemRespon)
                    }
                    dadosResp.responsavel = respArray
                    return dadosResp
                }else{
                    return message.ERROR_NOT_FOUND
                }
            }else{
                return message.ERROR_INTERNAL_SERVER_MODEL
            }
        }
    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER;
    }
}