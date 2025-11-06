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
 
export const getAllSQLChatMessage = async function () {
    try {
        
        let sql = `SELECT * FROM tbl_chat_message order by id_chat ASC`
        let resultChatMessage = await prisma.$queryRawUnsafe(sql)

        if (resultChatMessage) {
            return resultChatMessage
        } else {
            return false
        }

    } catch (error) {
        console.log(error)
        return false
        
    }
}