/**************************************************
 * Autor: Felipe Vieira
 * Date: 30/09/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export const deleteSQLDoctor = async function(id){
    try {
        
        let sql = `CALL deleteDoctor(?)`
        let resultDoctor = await prisma.$executeRawUnsafe(
            sql,
            id
        )

        if(resultDoctor){
            return true
        }else{
            return false
        }
    }
    catch (error) {
        console.log(error)
        return false
    }
}    