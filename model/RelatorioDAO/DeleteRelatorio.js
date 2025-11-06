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

export const deleteSQLRelatorio= async function (id) {
    try {
        
        let sql = `DELETE FROM tbl_relatorio WHERE id_relatorio = ${id}`
        let resultRelatorio = await prisma.$executeRawUnsafe(sql)

        if (resultRelatorio) {
            return true
        }else{
            return false
        }

    } catch (error) {
        console.log(error)
        return false;
    }
}
