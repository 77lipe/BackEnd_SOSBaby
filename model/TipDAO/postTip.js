/**************************************************
 * Autor: Felipe Vieira
 * Date: 14/10/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export const postSQLTip = async function(dataTip){
    try {
        let sql = `INSERT INTO tbl_dicas (
            titulo,
            descricao,
            id_tipo_dica
        )VALUES(
            '${dataTip.titulo}',
            '${dataTip.descricao}',
            '${dataTip.id_tipo_dica}'
        )`

        let result = await prisma.$executeRawUnsafe(sql)
        if(result){
            return true
        }else{
            return false
        }
    }catch (error) {
        console.log(error)
        return false
    }
}