/**************************************************
 * Autor: Felipe Vieira
 * Date: 07/10/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

 import { PrismaClient } from "@prisma/client"
 const prisma = new PrismaClient()

 export const updateUserPassword = async function(data){
    try {
       
        let sql = `UPDATE tbl_user SET senha = ? WHERE id_user = ?`
        let resultPass = await prisma.$executeRawUnsafe(sql, data.newPass, data.userId)

        if(resultPass){
            return true
        }else{
            return false
        }
    } catch (error) {
        console.log(error)
        return false
    }
}