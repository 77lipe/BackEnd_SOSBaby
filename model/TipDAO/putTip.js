/**************************************************
 * Autor: Felipe Vieira
 * Date: 14/10/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export const putSQLTip = async function(dataTip){
    try {
        let sql = `UPDATE tbl_dicas SET
            titulo = '${dataTip.titulo}',
            descricao = '${dataTip.descricao}',
            id_tipo_dica = '${dataTip.id_tipo_dica}'

        WHERE id_dica = ${dataTip.id_dica}`

        let result = await prisma.$executeRawUnsafe(sql)
        if(result){
            return true
        }else{
            return false
        }
    } catch (error) {
        console.log(error)
        return false
    }
}