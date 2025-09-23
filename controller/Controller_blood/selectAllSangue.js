/*******************************************************************
 * Autor: Felipe Vieira
 * Date: 21/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para Listar todos os  users
 *******************************************************************/

import * as message from '../../config/status/status.js'
import { ListSQLAllBlood } from "../../model/BloodDAO/ListAllBlood.js";

export const selectAllBlood = async function (){
    try {
        
        let dadosBlood = {}
        let resultBlood = await ListSQLAllBlood()
        
        if(resultBlood != false){
            if(resultBlood.length > 0){
                dadosBlood.message = message.SUCCES_SEARCH_ITEM
                dadosBlood.items = resultBlood.length
                dadosBlood.blood = resultBlood

                return dadosBlood
            }else{
                return message.ERROR_NOT_FOUND
            }
        }else{
            return message.ERROR_INTERNAL_SERVER_MODEL
        }

    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
        
    }
}