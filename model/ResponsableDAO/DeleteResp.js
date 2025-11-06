/**************************************************
 * Autor: Felipe Vieira
 * Date: 18/09/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

 import pkg from "@prisma/client"
 const { PrismaClient } = pkg
 const prisma = new PrismaClient()

export const deleteResp = async function(id) {
    try {

        let sql = `DELETE from tbl_responsavel where id = ${id}`
        let resultUser = await prisma.$executeRawUnsafe(sql, id)

        if (resultUser) {
            return true
        }else{
            return false
        }

    } catch (error) {
        console.log(error)
        return false;
    }
    
}