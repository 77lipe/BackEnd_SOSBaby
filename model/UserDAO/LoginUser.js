/**************************************************
 * Autor: Felipe Vieira
 * Date: 18/09/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const loginSQLUser = async function (user) {
    try {
        
        let sql = `SELECT * FROM tbl_responsavel WHERE email = '${user.email}' AND senha = '${user.senha}'`
        let resultUser = await prisma.$queryRawUnsafe(sql)

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
