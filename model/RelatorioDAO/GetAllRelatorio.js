/**************************************************
 * Autor: Isabelly Lima
 * Date: 06/11/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

 import pkg from "@prisma/client"
 const { PrismaClient } = pkg
 const prisma = new PrismaClient()

export const ListSQLRelatorio = async function () {
    try {
        
        let sql = `SELECT * FROM tbl_relatorio ORDER BY id_relatorio DESC`
        let resultRelatorio = await prisma.$queryRawUnsafe(sql)

        if (resultRelatorio) {
            return resultRelatorio
        }else{
            return false
        }

    } catch (error) {
        console.log(error)
        return false
        
    }
}
    