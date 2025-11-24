import * as message from '../../../config/status/status.js'
import {GetAllSQLRotinaItem} from '../../../model/RoutinesDAO/RelacionItemRotina/GetAllSQLRotinaItem.js'

export const getRelacionByRotina = async function (id_rotina) {
    try {
        
        if(id_rotina == undefined || id_rotina == null || id_rotina == "" || isNaN(id_rotina)){
            return message.ERROR_REQUIRED_FIELDS
        }else{

            let resultGet = await GetAllSQLRotinaItem(id_rotina)
            //console.log(resultGet);
            
            if(resultGet.length > 0){
                return { 
                    status_code: message.SUCCES_SEARCH_ITEM.status_code,
                    message: message.SUCCES_SEARCH_ITEM.message,
                    data: resultGet
                }
            }else{
                return message.ERROR_INTERNAL_SERVER_MODEL
            }
        }
    } catch (error) {
        console.log(error);
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}