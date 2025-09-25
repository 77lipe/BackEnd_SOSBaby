/*******************************************************************
 * Autor: Eduardo Couto
 * Date: 18/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para Listar todos os  users
 *******************************************************************/


 import {PrismaClient} from '@prisma/client'
 const prisma = new PrismaClient()


 export const SelectAllGenderSQL = async function(){
    try {
        let sql = 'CALL AllSexo'

        let result = await prisma.$queryRawUnsafe(sql)

        if(result)
            return result
        else
            return false

    } catch (error) {
        console.log
        return false
    }
}