/**************************************************
 * Autor: Isabelly Lima
 * Date: 09/10/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export const insertSQLCalendario = async function(calendario) {
    try {
        let sql = `insert into tbl_calendario(
                    titulo,
                    descricao,
                    data_evento,
                    cor,
                    id_user
                    )
                    values(
                     '${calendario.titulo}',
                     '${calendario.descricao}',
                     '${calendario.data_evento}',
                     '${calendario.cor}',
                     '${calendario.id_user}'
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