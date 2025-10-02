/*******************************************************************
 * Autor: Eduardo Nascimento
 * Date: 02/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para Listar todas as especialidades
 *******************************************************************/

 import * as message from '../../../BackEnd_SOSBaby/config/status/status.js'
 import { ListSQLAllEspec} from "../../../BackEnd_SOSBaby/model/EspecialidadeDAO/ListAllEspec";
 
 export const selectAllEspec = async function (){
     try {
         
         let dadosEspec = {}
         let resultEspec = await ListSQLAllBlood()
         
         if(resultEspec != false){
             if(resultEspec.length > 0){
                 dadosEspec.message = message.SUCCES_SEARCH_ITEM
                 dadosEspec.items = resultEspec.length
                 dadosEspec.blood = resultEspec
 
                 return dadosEspec
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