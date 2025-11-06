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

export const updateSQLCalendario = async function (calendario) {
    try {
        let sql = `UPDATE tbl_calendario SET 
        id_user = '${calendario.id_user}',
        titulo = '${calendario.titulo}',
        descricao  = '${calendario.descricao}',
        data_evento  = '${calendario.data_evento}',
        hora_calendario  = '${calendario.hora_calendario}',
        cor    = '${calendario.cor}',
        alarme_ativo  = '${calendario.alarme_ativo}'

        where id_calendario = ${calendario.id_calendario}`

        let resultCalendario = await prisma.$executeRawUnsafe(sql)
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