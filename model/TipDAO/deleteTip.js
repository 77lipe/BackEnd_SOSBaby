/**************************************************
 * Autor: Felipe Vieira
 * Date: 14/10/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

 import pkg from "@prisma/client"
 const { PrismaClient } = pkg
 const prisma = new PrismaClient()
 

export const deleteSQLTip = async function (id) {
    try {
        
        let sql = `DELETE FROM tbl_dica where id_dica = ${id}`
        let resultTip = await prisma.$executeRawUnsafe(sql)

        if (resultTip) {
            return true
        }else{
            return false
        }
       
    }catch (error) {
        console.log(error)
        return false;
    }    
}