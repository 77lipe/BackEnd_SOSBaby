/*********************************************************
 * Autor: Felipe Vieira
 * Date: 21/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para 
 *                            INSERT baby
 ********************************************************/

import * as message from '../../config/status/status.js'
import {insertSQLBaby} from '../../model/BabyDAO/InsertSQLBaby.js'
import {SelectIdSQLConvenio} from '../../model/ConvenioDAO/getIdSQLConvenio.js'

export const insertBebe = async function (bebe, contentType) {
    try {       
        
        if (String(contentType).toLocaleLowerCase() == 'application/json') {
            if (
                bebe.nome                   == undefined || bebe.nome               == null || bebe.nome                == '' || bebe.nome.length               > 45    || !bebe.nome.match(/^[A-Za-zÀ-ÿ\s]+$/) ||
                bebe.data_nascimento        == undefined || bebe.data_nascimento    == null || bebe.data_nascimento     == '' || bebe.data_nascimento.length    > 10    ||
                bebe.id_sexo                == undefined || bebe.id_sexo            == null || bebe.id_sexo             == '' || isNaN(bebe.id_sexo)                    ||
                bebe.peso                   == undefined || bebe.peso               == null || bebe.peso                == '' || bebe.peso.length               > 5     ||
                bebe.altura                 == undefined || bebe.altura             == null || bebe.altura              == '' || bebe.altura.length             > 5     ||
                bebe.id_sangue              == undefined || bebe.id_sangue          == null || bebe.id_sangue           == '' || isNaN(bebe.id_sangue)                  ||
                bebe.certidao_nascimento    == undefined || bebe.certidao_nascimento== null || bebe.certidao_nascimento == '' || bebe.certidao_nascimento.length > 45   ||
                bebe.imagem_certidao        == undefined || bebe.imagem_certidao    == null || bebe.imagem_certidao     == '' || bebe.imagem_certidao.length     > 3000 ||
                bebe.id_convenio            == undefined || bebe.id_convenio        == null || bebe.id_convenio         == '' || isNaN(bebe.id_convenio)                ||
                bebe.id_user                == undefined || bebe.id_user            == null || bebe.id_user             == '' || isNaN(bebe.id_user)
                
            ){
                return message.ERROR_REQUIRED_FIELDS                
            }else{

                let resultConvenio = await SelectIdSQLConvenio(bebe.id_convenio)
                if(resultConvenio){
                    console.log("Convenio existente:", resultConvenio);

                    let resultInsertBaby = await insertSQLBaby(bebe)
                   //console.log(resultInsertBaby);
                    

                    let idsRelacion = {
                        id_convenio: resultConvenio[0].id_convenio,
                        id_user: resultInsertBaby.id_user
                    }
                    //console.log(idsRelacion);

                    if(resultInsertBaby){
                        console.log("Bebê Criado:", resultInsertBaby);
                        return {
                            ...message.SUCCES_CREATED_ITEM,
                            data: resultInsertBaby
                        }
                    }else{
                        return message.ERROR_INTERNAL_SERVER
                    }
                  }
            }
        }else{
            return message.ERROR_CONTENT_TYPE
        }   

    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER    
    }
}
