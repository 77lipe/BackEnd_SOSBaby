import * as message from '../../../config/status/status.js'
import {GetAllSQLRotinaItem} from '../../../model/RoutinesDAO/RelacionItemRotina/GetUsersSQLRotina.js'

export const getUserRelacion = async function (id_user) {
    try {
        
        if(id_user == undefined || id_user == null || id_user == "" || isNaN(id_user)){
            return message.ERROR_REQUIRED_FIELDS
        }else{

            let resultGet = await GetAllSQLRotinaItem(id_user)
            console.log(resultGet);
            
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