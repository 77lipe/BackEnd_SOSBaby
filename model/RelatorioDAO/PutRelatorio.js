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
        id_user = '${relatorio.id_user}',
        titulo = '${relatorio.titulo}',
        descricao  = '${relatorio.descricao}',
        data_evento  = '${relatorio.data_evento}',
        hora_calendario  = '${relatorio.hora_calendario}',
        cor    = '${relatorio.cor}',
        alarme_ativo  = '${relatorio.alarme_ativo}'

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