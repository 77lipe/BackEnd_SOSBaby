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

export const updateSQLRelatorio = async function (relatorio) {
    try {
        let sql = `UPDATE tbl_relatorio SET 
        relatorio_bebe = '${relatorio.relatorio_bebe}',
        exames = '${relatorio.exames}',
        atestados  = '${relatorio.atestados}'

        where id_relatorio = ${relatorio.id_calendario}`

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