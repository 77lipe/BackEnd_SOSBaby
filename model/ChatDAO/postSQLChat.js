/**************************************************
 * Autor: Felipe Vieira
 * Date: 21/10/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/
 import pkg from "@prisma/client"
 const { PrismaClient } = pkg
 const prisma = new PrismaClient()
 
export const postSQLChat = async function(dataChat){
    try {
        
        let sql = `INSERT INTO tbl_chat(
        user1_id,
        user2_id
        )VALUES(?, ?)`
        
        let result = await prisma.$executeRawUnsafe(sql,dataChat.nome_chat)
        if(result){
            let idGET = await prisma.$queryRawUnsafe('SELECT * FROM tbl_chat ORDER BY id_chat DESC LIMIT 1')
            let id = idGET
            return id[0]
        }else
        return false

    } catch (error) {
        console.log(error)
        return false
    }
}