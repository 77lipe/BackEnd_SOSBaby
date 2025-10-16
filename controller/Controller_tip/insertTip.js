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
                dataTip.conteudo        == "" || dataTip.conteudo       == undefined || dataTip.conteudo        == null || dataTip.conteudo.length > 5000   ||
                dataTip.imagem          == "" || dataTip.imagem         == undefined || dataTip.imagem          == null || dataTip.imagem.length > 225      ||
                dataTip.id_categoria    == "" || dataTip.id_categoria   == undefined || dataTip.id_categoria    == null || isNaN(dataTip.id_categoria) 
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