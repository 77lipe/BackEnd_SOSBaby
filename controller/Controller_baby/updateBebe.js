/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para 
 *                              UPDATE bebe
 ********************************************************/

import * as message from '../../config/status/status.js'
import { UpdateSQLBaby } from '../../model/BabyDAO/UpdateSQLBaby.js'

export const updateBebe = async function (id, bebe, contentType) {
    try {

        if (String(contentType).toLocaleLowerCase() == 'application/json') {
            if (
                bebe.nome                   == undefined || bebe.nome               == null || bebe.nome                == '' || bebe.nome.length               > 45    ||
                bebe.data_nascimento        == undefined || bebe.data_nascimento    == null || bebe.data_nascimento     == '' || bebe.data_nascimento.length    > 10    ||
                bebe.id_sexo                == undefined || bebe.id_sexo            == null || bebe.id_sexo             == '' || isNaN(bebe.id_sexo)                    ||
                bebe.peso                   == undefined || bebe.peso               == null || bebe.peso                == '' || bebe.peso.length               > 2     ||
                bebe.altura                 == undefined || bebe.altura             == null || bebe.altura              == '' || bebe.altura.length             > 3     ||
                bebe.id_sangue              == undefined || bebe.id_sangue          == null || bebe.id_sangue           == '' || isNaN(bebe.id_sangue)                  ||
                bebe.certidao_nascimento    == undefined || bebe.certidao_nascimento== null || bebe.certidao_nascimento == '' || bebe.certidao_nascimento.length> 45    ||
                bebe.cartao_medico          == undefined || bebe.cartao_medico      == null || bebe.cartao_medico       == '' || bebe.cartao_medico.length      > 100   ||
                bebe.imagem_certida         == undefined || bebe.imagem_certida     == null || bebe.imagem_certida      == '' || bebe.imagem_certida.length     > 100   
            ) {
                return message.ERROR_REQUIRED_FIELDS
            } else {
                let idGet = id

                if (idGet == undefined || idGet == null || idGet == "" || isNaN(idGet)) {
                    return message.ERROR_REQUIRED_FIELDS
                } else {

                    baby.id = idGet
                    let resultID = await UpdateSQLBaby(baby)

                    if (resultID) {
                        return message.SUCCES_UPDATE_ITEM
                    } else {
                        return message.ERROR_INTERNAL_SERVER_MODEL
                    }
                }
            }
        } else {
            return message.ERROR_CONTENT_TYPE
        }

    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}