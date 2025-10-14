/*********************************************************
 * Autor: Felipe Vieira
 * Date: 14/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para INSERT DICAS
 ********************************************************/

import * as message from '../../config/status/status.js'
import { postSQLTip } from "../../model/TipDAO/postTip.js"

export const insertDica = async function (dataTip, contentType){
    try {
        
        if(String(contentType).toLocaleLowerCase() == 'application/josn'){
            if (
                dataTip.titulo          == "" || dataTip.titulo         == undefined || dataTip.titulo          == null || dataTip.titulo.length > 100      ||
                dataTip.descricao       == "" || dataTip.descricao      == undefined || dataTip.descricao       == null || dataTip.descricao.length > 500   ||
                dataTip.id_tipo_dica    == "" || dataTip.id_tipo_dica   == undefined || dataTip.id_tipo_dica    == null || isNaN(dataTip.id_tipo_dica) 
            ) {
                return message.ERROR_REQUIRED_FIELDS
            }else{

                let resultDica = await postSQLTip(dataTip)
                if (resultDica) {
                    return{
                        ...message.SUCCES_CREATED_ITEM,
                        data: dataTip
                    }
                }else{
                    return message.ERROR_INTERNAL_SERVER_MODEL
                }
            }
        }else{
            return message.ERROR_CONTENT_TYPE
        }

    } catch (error) {
        console.log(error);
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}