/*********************************************************
 * Autor: Eduardo Nascimento
 * Date: 02/10/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para deletar Especialidade
 ********************************************************/

 import * as message from '../../../BackEnd_SOSBaby/config/status/status.js'
 import { SelectIdSQLEspec } from '../../../BackEnd_SOSBaby/model/EspecialidadeDAO/SelectIdEspec'
 import { DeleteSQLEspec } from '../../../BackEnd_SOSBaby/model/EspecialidadeDAO/DeleteEspec'
 
 export const DeleteEspec = async function (id) {
     try {
         
         if (
             id == "" || id == null || id == undefined || isNaN(id)
         ){
             return message.ERROR_REQUIRED_FIELDS  
         }else{
 
             let resultEspec = await SelectIdSQLEspec(id)
             if (resultEspec != false || typeof(resultEspec) == 'object') {
 
                 let resultEspec = await DeleteSQLEspec(id)
                 if(resultEspec.length > 0){
                     return message.SUCCES_DELETED_ITEM
                 }else{
                     return message.ERROR_NOT_FOUND
                 }
             } else {
                 return message.ERROR_INTERNAL_SERVER_MODEL
         }
     }  
     } catch (error) {
         console.log(error)
         return message.ERROR_INTERNAL_SERVER_CONTROLLER
     }
}