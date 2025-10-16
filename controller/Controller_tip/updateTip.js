/*********************************************************
 * Autor: Felipe Vieira
 * Date: 14/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para ATUALIZAR DICAS
 ********************************************************/

import * as message from '../../config/status/status.js'
import { putSQLTip } from "../../model/TipDAO/putTip.js"
import { selectSQLIdTip } from "../../model/TipDAO/getIdTip.js";

export const updateDicas = async function (id, dataTip, contentType){
    try {
        
        if(String(contentType).toLocaleLowerCase() == 'application/json'){
            if (
                dataTip.titulo          == "" || dataTip.titulo         == undefined || dataTip.titulo          == null || dataTip.titulo.length > 100      ||
                dataTip.conteudo        == "" || dataTip.conteudo       == undefined || dataTip.conteudo        == null || dataTip.conteudo.length > 5000   ||
                dataTip.imagem          == "" || dataTip.imagem         == undefined || dataTip.imagem          == null || dataTip.imagem.length > 225      ||
                dataTip.id_categoria    == "" || dataTip.id_categoria   == undefined || dataTip.id_categoria    == null || isNaN(dataTip.id_categoria) 
            ) {
                return message.ERROR_REQUIRED_FIELDS
            }else{

                let resultIdDica = await selectSQLIdTip(id)
                if (resultIdDica != false || typeof (resultIdDica) == 'object') {
                    if (resultIdDica > 0) {
                        
                        dataTip.id_dica = id
                        let resultDica = await putSQLTip(dataTip)
                        if (resultDica) {
                            return {
                                ...message.SUCCES_UPDATE_ITEM,
                                data: dataTip
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
        console.log(error);
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}