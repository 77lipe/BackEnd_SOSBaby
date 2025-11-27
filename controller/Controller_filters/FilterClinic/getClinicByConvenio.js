import * as message from '../../../config/status/status.js'
import { FilterConvenioByClinic } from '../../../model/FilterDAO/FilterConvenioByClinic/getSQLConvenioByClinic.js'

export const FilterClinicByConvenio = async function(dataName, contentType){
    try {
        
        if(String(contentType).toLocaleLowerCase() == 'application/json'){
            if(
                dataName.name == "" || dataName.name == undefined || dataName.name == null || dataName.name.length > 100 || !dataName.name.match(/^[A-Za-zÀ-ÿ\s]+$/)
            ){
                return message.ERROR_REQUIRED_FIELDS
            }else{

                let resultName = await FilterConvenioByClinic(dataName.name)
                if(resultName){
                    if(resultName.length > 0 ){
                        return{
                            status_code: message.SUCCES_SEARCH_ITEM.status_code,
                            message: message.SUCCES_SEARCH_ITEM.message,
                            Quantidade: resultName.length,
                            Nomes: resultName
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
        console.log(error);
        return message.ERROR_INTERNAL_SERVER_CONTROLLER;
    }
}