/**************************************************
 * Autor: Felipe Vieira
 * Date: 18/09/25
 * Versão: 1.0
 * Desc: App que irá conter os deletes para
 *       o Banco de Dados
 **************************************************/


 import {PrismaClient} from '@prisma/client'
 const prisma = new PrismaClient()

 export const DeleteGenderSQL = async function(id) {
    try {
        let result =  await prisma.$executeRawUnsafe(
            `CALL deleteSexo(?)`,
            id
        )

        if (result) {
            return true
        } else {
            return false
        }
    } catch (error) {
        console.log(error)
        return false
    }
}