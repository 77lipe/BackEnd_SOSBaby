/***********************************************************
 * Autor: Felipe Vieira
 * Date: 18/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para INSERT Doctor
 ***********************************************************/

import * as message from '../../config/status/status.js'
import {insertSQLDoctor} from '../../model/DoctorDAO/InsertDoctor.js' // Ainda não existe o arquivo 

export const insertDoctor = async function (dataDoctor, contentType) {
    try {
        
        if (String(contentType).toLocaleLowerCase() === 'application/json') {
            if (
                data
            ) {
                
            }
        }


    } catch (error) {
        
    }
}
