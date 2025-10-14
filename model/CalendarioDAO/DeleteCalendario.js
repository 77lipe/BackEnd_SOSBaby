/**************************************************
 * Autor: Isabelly Lima
 * Date: 09/10/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

 import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export const deleteSQLCalendario = async function (id) {
    try {
        
        let sql = `DELETE * FROM tbl_calendario where id = ${id}`
        let resultCalendario = await prisma.$executeRawUnsafe(sql, id)

        if (resultCalendario) {
            return true
        }else{
            return false
        }



    } catch (error) {
        console.log(error)
        return false;
    }
}
