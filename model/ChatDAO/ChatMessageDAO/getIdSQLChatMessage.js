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

export const getIdSQLChatMessage = async function (id) {
    try {
        
        let getID = `SELECT * FROM tbl_chat_message WHERE id_chat_user = ${id}`
        let resultChatMessage = await prisma.$queryRawUnsafe(getID)

        if(resultChatMessage){
            return resultChatMessage
        }else{
            return false
        }

    } catch (error) {
        console.log(error)
        return false
        
    }
}