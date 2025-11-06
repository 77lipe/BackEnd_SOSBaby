/**************************************************
 * Autor: Felipe Vieira
 * Date: 14/09/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

 import pkg from "@prisma/client"
 const { PrismaClient } = pkg
 const prisma = new PrismaClient()
 

export const selectSQLAllTip = async function(){
    try {
        
        let sql = `SELECT * FROM tbl_dica ORDER BY id_dica ASC`
        let resultAllTips = await prisma.$queryRawUnsafe(sql)

        if(resultAllTips){
            return resultAllTips
        }else{
            return false
        }

    } catch (error) {
        console.log(error)
        return false
    }
}