/**************************************************
 * Autor: Isabelly Lima
 * Date: 09/10/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

 import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export const updateSQLCalendario = async function (calendario) {
    try {
        let sql = `UPDATE tbl_calendario SET 
        dia    = '${calendario.dia}',
        mes    = '${calendario.mes}',
        ano    = '${calendario.ano}',
        titulo = '${calendario.titulo}',
        nota  = '${calendario.nota}',
        cor    = '${calendario.cor}',
        alarme = '${calendario.alarme}',
        id_calendario = '${calendario.id_calendario}'

        where id = ${calendario.id}`

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