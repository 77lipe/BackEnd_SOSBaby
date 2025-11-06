/***********************************************************
 * Autor: Isabelly Lima
 * Date: 06/11/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para UPDATE relatório
 ***********************************************************/

import * as message from '../../config/status/status.js'
import {updateSQLRelatorio} from '../../model/RelatorioDAO/PutRelatorio.js' 
import {selectSQLIdRelatorio} from "../../model/RelatorioDAO/PutRelatorio.js";

export const updateRelatorio = async function (id, relatorio, contentType) {
    try {

        if (String(contentType).toLocaleLowerCase() == 'application/json') {
            if (
                relatorio.relatorio_bebe   == "" || relatorio.relatorio_bebe  == undefined || relatorio.relatorio_bebe  == null || relatorio.relatorio_bebe.length > 1000    ||
                relatorio.exames           == "" || relatorio.exames          == undefined || relatorio.exames          == null || relatorio.exames.length         > 1000    ||
                relatorio.atestados        == "" || relatorio.atestados       == undefined || relatorio.atestados       == null || relatorio.atestados.length      > 1000     
            
            ) {
                return message.ERROR_REQUIRED_FIELDS
            }else{

                let resultIdRelatorio = await selectSQLIdRelatorio(id)
                if (resultIdRelatorio != false || typeof (resultIdRelatorio) == 'object') {
                    if (resultIdRelatorio.length > 0) {
                        
                        dataRelatorio.id_relatorio = id
                        let resultRelatorio = await updateSQLRelatorio(dataRelatorio)

                        if (resultRelatorio) {
                            return {
                                ...message.SUCCES_UPDATE_ITEM,
                                data: dataRelatorio
                            }
                        }
                    }
                }else{
                    return message.ERROR_INTERNAL_SERVER_MODEL
                }
            }
        }else{
            return message.ERROR_CONTENT_TYPE
        }

    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER        
    }
}