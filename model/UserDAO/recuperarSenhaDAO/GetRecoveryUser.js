/**************************************************
 * Autor: Felipe Vieira
 * Date: 07/10/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const findUserEmail = async function(email){
    try {
        
        let sql = `SELECT * FROM tbl_user WHERE email = '${email}'`
        let resultEmail = await prisma.$queryRawUnsafe(sql)

        if(resultEmail.length > 0){
            return resultEmail[0]
        }else{
            return false
        }
    } catch (error) {
        console.log(error)
        return false
    }
}