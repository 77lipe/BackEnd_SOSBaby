/**************************************************
 * Autor: Felipe Vieira
 * Date: 21/10/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export const postSQLMessage = async function(dataMessage){
    try {
        
        let sql = `INSERT INTO tbl_messager(
        conteudo,
        id_chat,
        id_user,
        created_at
        )VALUES(
        ?,
        ?,
        ?,
        NOW()
        )`

        let result = await prisma.$executeRawUnsafe(
            sql,
            dataMessage.conteudo,
            dataMessage.id_chat,
            dataMessage.id_user,
        )

        if(result){
            let getId = await prisma.$queryRawUnsafe('SELECT * FROM tbl_messager ORDER BY id_mensagem DESC LIMIT 1')
            let id = getId
            return id[0]
        }else{
            return false
        }

    } catch (error) {
        console.log(error);
        return false
    }
}