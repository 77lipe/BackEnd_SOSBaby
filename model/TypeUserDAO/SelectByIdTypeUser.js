/**************************************************
 * Autor: Eduardo
 * Date: 16/09/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/


const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const idTypeUser = async function (id) {
    try {
        let sql = `SELECT * FROM tbl_type_user  WHERE id = ${id} `
        let result = await prisma.queryRawUnsafe(sql)
        if (result) {
            returntrue
        } else {
            return false
        }
    } catch (error) {
        console.log(error)
        return false
    }
}