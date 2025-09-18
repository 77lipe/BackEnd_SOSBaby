/**************************************************
 * Autor: Eduardo
 * Date: 16/09/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

const {PrismaClient, Prisma} = require('@prisma/client')
const prisma = new PrismaClient()

const insertTypeUserSQL = async function(type) {
    try {
        let sql = `insert into tbl_type_user(
                    tipo
                    )values(
                     '${type.tipo}'
                    )`

        let result = await prisma.$executeRawUnsafe(sql)
        if (result) {
            return true
        }else{
            return false
        }
    } catch (error) {
        console.log(error)
        return false
    }
}