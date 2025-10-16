/**************************************************
 * Autor: Felipe Vieira
 * Date: 16/10/25
 * Versão: 1.0
 * Desc: App que irá conter as validações para
 *                  Buscar ID de uma categoria 
 **************************************************/
import * as message from '../../config/status/status.js'

export const getIdCategory = async function(idCategorys) {
    try {
        let idGet = idCategorys

        if (idGet == undefined || idGet == null  || idGet == ""  || isNaN(idGet)) {
            return message.ERROR_REQUIRED_FIELDS
        } else {
            let result = await getIdCategory(idGet)
            if (result != false || typeof(result == 'object')) {
                if (result.length > 0) {
                    return{
                        ...message.SUCCES_SEARCH_ITEM,
                        data: result
                    }
                } else {
                    return message.ERROR_NOT_FOUND
                }

            } else {
                return message.ERROR_INTERNAL_SERVER_MODEL
            }
        }
    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER;
    }
}