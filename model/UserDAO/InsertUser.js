/**************************************************
 * Autor: Felipe Vieira
 * Date: 18/09/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

const PrismaClient = require('@prisma/client')
const prisma = new PrismaClient()

const insertSQLUser = async function (user) {
    try {
        let sql = `INSERT INTO tbl_user = (
            email,
            senha,
            id_tipo
        )values(
            '${user.email}',
            '${user.senha}',
            '${user.id_tipo}'
        )`

        let result = await prisma.$executeRawUnsafe(sql)
        if (result == true) {
            let getID = `SELECT * FROM tbl_user WHERE email = ${user.email} ORDER BY id_user DESC LIMIT 1`
            let id = await prisma.$queryRawUnsafe(getID)

            return id[0]
        }else{
            return false
        }


    } catch (error) {
        console.log(error)
        return false;
    }
}