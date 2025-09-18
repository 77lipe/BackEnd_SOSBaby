/**************************************************
 * Autor: Felipe Vieira
 * Date: 18/09/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const updateSQLUser = async function (user) {
    try {
        let sql = `UPDATE tbl_user SET 
        email  = '${user.email}',
        senha = '${user.senha}',
        id_tipo = '${user.id_tipo}'

        where id = ${user.id}`

        let resultUser = await prisma.$executeRawUnsafe(sql)
        if (resultUser == true) {
            return true
        }else{
            return false
        }


    } catch (error) {
        console.log(error)
        return false;
    }
}