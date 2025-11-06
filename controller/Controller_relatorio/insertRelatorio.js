/*********************************************************
 * Autor: Isabelly Lima
 * Date: 06/11/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para INSERT relatório
 ********************************************************/

import * as message from '../../config/status/status.js'
import {insertSQLRelatorio} from "../../model/RelatorioDAO/InsertRelatorio.js";


export const insertRelatorio = async function (relatorio, contentType) {
       try {
            
        if(String(contentType).toLocaleLowerCase() == "application/json"){
            if(
                relatorio.relatorio_bebe   == "" || relatorio.relatorio_bebe  == undefined || relatorio.relatorio_bebe  == null || relatorio.relatorio_bebe.length > 1000    ||
                relatorio.exames           == "" || relatorio.exames          == undefined || relatorio.exames          == null || relatorio.exames.length         > 1000    ||
                relatorio.atestados        == "" || relatorio.atestados       == undefined || relatorio.atestados       == null || relatorio.atestados.length      > 1000     
            ){
                return message.ERROR_REQUIRED_FIELDS
            }else{
                let resultRelatorio = await insertSQLRelatorio(relatorio)

                if(resultRelatorio){
                    return{
                        ...message.SUCCES_CREATED_ITEM,
                        data: relatorio
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