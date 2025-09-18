/**************************************************
 * Autor: Felipe Vieira
 * Date: 16/09/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const idUser = async function (id) {
    try {

        let sql = `SELECT * FROM tbl_responsavel WHERE id = ${id}`
        let resultUser = await prisma.queryRawUnsafe(sql)

        if (resultUser) {
            return true
        }else{
            return false
        }


    } catch (error) {
        console.log(erro)
        return false;
    }
    
}