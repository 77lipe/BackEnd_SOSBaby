/**************************************************
 * Autor: Isabelly Lima
 * Date: 09/10/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

 import pkg from "@prisma/client"
 const { PrismaClient } = pkg
 const prisma = new PrismaClient()

export const ListSQLCalendario = async function () {
    try {
        
        let sql = `SELECT * FROM tbl_calendario ORDER BY id_calendario DESC`
        let resultCalendario = await prisma.$queryRawUnsafe(sql)

        if (resultCalendario) {
            return resultCalendario
        }else{
            return false
        }

    } catch (error) {
        console.log(error)
        return false
        
    }
}
    