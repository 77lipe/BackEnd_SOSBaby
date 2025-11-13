/*********************************************************
 * Autor: Felipe Vieira
 * Date: 13/11/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       Buscas por filtro: NOMES DO MÉDICO
 ********************************************************/

import * as message from '../../../config/status/status.js'
import { filterNameSQLDoctor } from '../../../model/DoctorDAO/filterDAO/filterNameDoctor.js'

export const filterNameDoctorController = async function (dataName, contentType){
    try {
        
        if(String(contentType).toLocaleLowerCase() == 'application/json'){
            if(
                dataName.nome == null || dataName.nome == undefined || dataName.nome == "" || dataName.nome.length > 100
            ){
                return message.ERROR_REQUIRED_FIELDS
            }else{

                const resultName = await filterNameSQLDoctor(dataName.nome)
                if(resultName){
                    if(resultName.length > 0){
                        return{
                            status_code: message.SUCCES_SEARCH_ITEM.status_code,
                            message: message.SUCCES_SEARCH_ITEM.message,
                            Items: resultName.length,
                            Médicos: resultName
                        }
                    }else{
                        return message.ERROR_NOT_FOUND
                    }
                }else{
                    return message.ERROR_INTERNAL_SERVER_MODEL
                }
            }
        }else{
            return message.ERROR_CONTENT_TYPE
        }
    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
} 