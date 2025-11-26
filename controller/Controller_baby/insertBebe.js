/*********************************************************
 * Autor: Felipe Vieira
 * Date: 21/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para 
 *                            INSERT baby
 ********************************************************/

import * as message from '../../config/status/status.js'
import { insertSQLBaby } from '../../model/BabyDAO/InsertSQLBaby.js'
import { SelectIdSQLConvenio } from '../../model/ConvenioDAO/getIdSQLConvenio.js'
import { InsertSQLUserConvenio } from '../../model/ConvenioDAO/RelacionConvenioDAO/insertSQLRelacion.js'

export const insertBebe = async function (bebe, contentType) {
    try {

        if (String(contentType).toLowerCase() === "application/json") {

            if (
                bebe.nome                   == "" || bebe.nome                == undefined || bebe.nome                == null || bebe.nome.length  > 45    || !bebe.nome.match(/^[A-Za-zÀ-ÿ\s]+$/) ||
                bebe.data_nascimento        == "" || bebe.data_nascimento     == undefined || bebe.data_nascimento     == null || bebe.data_nascimento.length > 10     ||
                bebe.id_sexo                == "" || bebe.id_sexo             == undefined || bebe.id_sexo             == null || isNaN(bebe.id_sexo)                   ||
                bebe.peso                   == "" || bebe.peso                == undefined || bebe.peso                == null || bebe.peso.length  > 5                ||
                bebe.altura                 == "" || bebe.altura              == undefined || bebe.altura              == null || bebe.altura.length > 5                ||
                bebe.id_sangue              == "" || bebe.id_sangue           == undefined || bebe.id_sangue           == null || isNaN(bebe.id_sangue)                 ||
                bebe.certidao_nascimento    == "" || bebe.certidao_nascimento == undefined || bebe.certidao_nascimento == null || bebe.certidao_nascimento.length > 45 ||
                bebe.imagem_certidao        == "" || bebe.imagem_certidao     == undefined || bebe.imagem_certidao     == null || bebe.imagem_certidao.length > 3000    ||
                bebe.id_user                == "" || bebe.id_user             == undefined || bebe.id_user             == null || isNaN(bebe.id_user)                   ||

                bebe.id_convenio            == undefined || bebe.id_convenio  == null      || !Array.isArray(bebe.id_convenio) || bebe.id_convenio.length === 0
            ) {
                return message.ERROR_REQUIRED_FIELDS
            } else {

                let conveniosValidados = []
                for (let idConvenio of bebe.id_convenio) {
                    let resultConvenio = await SelectIdSQLConvenio(idConvenio)
                    if (resultConvenio) {
                        conveniosValidados.push(resultConvenio[0])
                    } else {
                        console.log("ERROR AO VERIFICAR CONVENIO:", idConvenio)
                        return message.ERROR_INTERNAL_SERVER_MODEL
                    }
                }

                let resultInsertBaby = await insertSQLBaby(bebe)
                if (!resultInsertBaby) {
                    return message.ERROR_INTERNAL_SERVER_MODEL
                }

                let relacionamentosCriados = []
                for (let conv of conveniosValidados) {

                    let IdsRelacion = {
                        id_convenio: conv.id_convenio,
                        id_user: resultInsertBaby.id_user
                    }

                    let resultRelacionamento = await InsertSQLUserConvenio(IdsRelacion)
                    if (resultRelacionamento) {
                        relacionamentosCriados.push(resultRelacionamento)
                    } else {
                        console.log("ERROR AO CRIAR O RELACIONAMENTO")
                        return message.ERROR_INTERNAL_SERVER_MODEL
                    }
                }

                return {
                    ...message.SUCCES_CREATED_ITEM,
                    data: resultInsertBaby,
                    convenios: relacionamentosCriados
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
