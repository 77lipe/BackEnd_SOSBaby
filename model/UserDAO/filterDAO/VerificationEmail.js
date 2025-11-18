/**************************************************
 * Autor: Felipe Vieira
 * Date: 06/11/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

 import pkg from "@prisma/client"
 const { PrismaClient } = pkg
 const prisma = new PrismaClient()
 

export const VerifyEmail = async function (DataEmail) {
    try {
        
        let sql = `SELECT * FROM tbl_user WHERE email = '${DataEmail}' order by id_user desc`
        let resultEmail = await prisma.$queryRawUnsafe(sql)
        
        if(resultEmail.length > 0){
            return resultEmail
        }else{
            return false
        }

    } catch (error) {
        return false
    }
}