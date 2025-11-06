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

export const getIdSQLChat = async function(id){
    try {
        
        let sql = `SELECT * FROM tbl_chat WHERE id_chat = ${id}`
        
        let result = await prisma.$queryRawUnsafe(sql)
        if(result){
            return result
        }else{
            return false
        }

    } catch (error) {
        console.log(error)
        return false
    }
}