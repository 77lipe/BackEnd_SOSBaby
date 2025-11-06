/**************************************************
 * Autor: Felipe Vieira
 * Date: 23/10/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

 import pkg from "@prisma/client"
 const { PrismaClient } = pkg
 const prisma = new PrismaClient()
 
export const postSQLChatMessage = async function (chatMessage) {
    try {
        
        let sql = `INSERT INTO tbl_chat_message (
        id_chat,
        id_mensagem
        )
        VALUES
        (
        '${chatMessage.id_chat}',
        '${chatMessage.id_mensagem}'
        )`

        let resultSQLChatMessage = await prisma.$executeRawUnsafe(sql)

        if(resultSQLChatMessage){
            let getID = `SELECT * FROM tbl_chat_message ORDER BY id_mensagem DESC LIMIT 1`
            let id = await prisma.$queryRawUnsafe(getID)

            return id[0]
        }
        return false

    } catch (error) {
        console.log(error)
        return false
        
    }
}