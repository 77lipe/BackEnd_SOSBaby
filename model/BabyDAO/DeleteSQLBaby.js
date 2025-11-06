/**************************************************
 * Autor: Felipe Vieira
 * Date: 23/09/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

 import pkg from "@prisma/client"
 const { PrismaClient } = pkg
 const prisma = new PrismaClient()

export const DeleteSQLBaby = async function (id) {
    try {
        
        let sql = `DELETE FROM tbl_bebe WHERE id_bebe = ${id}`
        let resultSQLbaby = await prisma.$executeRawUnsafe(sql)
        if(resultSQLbaby){
            return true
        }else{
            return false
        }

    } catch (error) {
        console.log(error)
        return false
        
    }
}
