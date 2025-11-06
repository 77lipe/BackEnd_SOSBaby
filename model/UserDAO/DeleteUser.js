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
 

export const deleteSQLUser = async function (id) {
    try {
        
        let sql = `DELETE * FROM tbl_user where id_user = ${id}`
        let resultUser = await prisma.$executeRawUnsafe(sql)

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


