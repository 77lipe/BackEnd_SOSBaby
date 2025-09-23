/**************************************************
 * Autor: Felipe Vieira
 * Date: 18/09/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

 import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export const loginSQLUser = async function (user) {
    try {
        
        let sql = `SELECT * FROM tbl_user WHERE email = '${user.email}' and senha = '${user.senha}'`
        let resultUser = await prisma.$queryRawUnsafe(sql)

        if (resultUser) {
            return resultUser
        }else{
            return false
        }

    } catch (error) {
        console.log(error)
        return false;
    }
}
