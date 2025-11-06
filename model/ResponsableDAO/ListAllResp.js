/**************************************************
 * Autor: Felipe Vieira
 * Date: 16/09/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

 import pkg from "@prisma/client"
 const { PrismaClient } = pkg
 const prisma = new PrismaClient()

export const ListSQLresps = async function () {
    try {
        
        let sql = `SELECT * FROM tbl_responsavel ORDER BY id DESC`
        let resultResps = await prisma.$queryRawUnsafe(sql)

        if (resultResps) {
            return resultResps
        }else{
            return false
        }

    } catch (error) {
        console.log(error)
        return false
        
    }
}
    