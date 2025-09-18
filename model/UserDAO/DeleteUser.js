/**************************************************
 * Autor: Felipe Vieira
 * Date: 18/09/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const deleteSQLUser = async function (id) {
    try {
        
        let sql = `DELETE * FROM tbl_user where id = ${id}`
        let resultUser = await prisma.$executeRawUnsafe(sql, id)

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


