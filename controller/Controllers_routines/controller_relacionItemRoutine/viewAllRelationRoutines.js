import * as message from '../../../config/status/status.js'
import {getSQLAllRoutine} from '../../../model/RoutinesDAO/RelacionItemRotina/GetALLRelacionRotina.js'

export const getALLRoutines = async function () {
    try {
        
        let resultGet = await getSQLAllRoutine()
        //console.log(resultGet);
        if(resultGet){
            if(resultGet.length > 0){
                return {
                    status_code: message.SUCCES_SEARCH_ITEM.status_code,
                    message: message.SUCCES_SEARCH_ITEM.message,
                    data: resultGet
                }
            }else{
                return message.ERROR_NOT_FOUND
            }
        }else{
            return message.ERROR_INTERNAL_SERVER_MODEL
        }
        
    } catch (error) {
        console.log(error);
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}