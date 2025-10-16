/*********************************************************
 * Autor: Isabelly Lima
 * Date: 09/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para INSERT calendário
 ********************************************************/

import * as message from '../../config/status/status.js'
import {insertSQLCalendario} from "../../model/CalendarioDAO/InsertCalendario.js";


export const insertCalendario = async function (calendario, contentType) {
       try {
            
        if(String(contentType).toLocaleLowerCase() == "application/json"){
            if(
                calendario.data_calendario          == "" || calendario.data_calendario     == undefined || calendario.data_calendario      == null || calendario.data_calendario.length > 25       ||
                calendario.hora_calendario          == "" || calendario.hora_calendario     == undefined || calendario.hora_calendario      == null || calendario.hora_calendario.length > 10   ||
                isNaN(calendario.alarme_ativo)            ||
                calendario.titulo                   == "" || calendario.titulo              == undefined || calendario.titulo               == null || calendario.titulo.length > 100           ||
                calendario.descricao                == "" || calendario.descricao           == undefined || calendario.descricao            == null || calendario.descricao.length   > 200      ||
                calendario.cor                      == "" || calendario.cor                 == undefined || calendario.cor                  == null || calendario.cor.length > 10               ||
                calendario.id_user                  == "" || calendario.id_user             == undefined || calendario.id_user              == null || isNaN(calendario.id_user)   
            ){
                return message.ERROR_REQUIRED_FIELDS
            }else{
                let resultCalendario = await insertSQLCalendario(calendario)

                if(resultCalendario){
                    return{
                        ...message.SUCCES_CREATED_ITEM,
                        data: calendario
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