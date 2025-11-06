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

export const insertSQLCalendario = async function(calendario) {
    try {
        let sql = `insert into tbl_calendario(
                    id_user,
                    titulo,
                    descricao,
                    data_calendario,
                    hora_calendario,
                    cor,
                    alarme_ativo
                    )VALUES(
                     '${calendario.id_user}',
                     '${calendario.titulo}',
                     '${calendario.descricao}',
                     '${calendario.data_calendario}',
                     '${calendario.hora_calendario}',
                     '${calendario.cor}',
                     '${calendario.alarme_ativo}'
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