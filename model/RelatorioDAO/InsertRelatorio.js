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

export const insertSQLRelatorio = async function(relatorio) {
    try {
        let sql = `insert into tbl_relatorio(
                    relatorio_bebe,
                    exames,
                    atestados
                    )VALUES(
                     '${relatorio.relatorio_bebe}',
                     '${relatorio.exames}',
                     '${relatorio.atestados}'
                    )`

        let result = await prisma.$executeRawUnsafe(sql)
        if (result) {
            return true
        }else{
            return false
        }
    } catch (error) {
        console.log(error)
        return false
    }
}