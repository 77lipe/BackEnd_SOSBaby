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
        let sql = `INSERT INTO tbl_dica (
            titulo,
            conteudo,
            imagem,
            id_categoria
        )VALUES(
            '${dataTip.titulo}',
            '${dataTip.conteudo}',
            '${dataTip.imagem}',
            '${dataTip.id_categoria}'
        )`

        let result = await prisma.$executeRawUnsafe(sql)
        if(result){
            let getID = `SELECT * FROM tbl_dica ORDER BY id_dica DESC LIMIT 1`
            let id = await prisma.$queryRawUnsafe(getID)
            return id[0]
        }else{
            return false
        }
    }catch (error) {
        console.log(error)
        return false
    }
}