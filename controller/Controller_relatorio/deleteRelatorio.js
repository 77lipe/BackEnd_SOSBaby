/*********************************************************
 * Autor: Isabelly Lima
 * Date: 06/11/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para INSERT relatório
 ********************************************************/

import * as message from '../../config/status/status.js'
import {selectSQLIdRelatorio} from "../../model/RelatorioDAO/GetIDRelatorio.js"
import {deleteSQLRelatorio} from "../../model/RelatorioDAO/DeleteRelatorio.js"

export const deleteRelatorio = async function (id) {
    try {
        if(
            id == undefined || id == null || id == "" || isNaN(id)
        ){
            return message.ERROR_REQUIRED_FIELDS
        }else{

            let resultRelatorio = await selectSQLIdRelatorio(id)
            if(resultRelatorio != false || typeof(resultRelatorio)){
                if (resultRelatorio.length > 0) {

                    let result = await deleteSQLRelatorio(id)
                    if (result) {
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
        console.log(error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}