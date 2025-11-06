/**************************************************
 * Autor: Felipe Vieira
 * Date: 18/09/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/
 import pkg from "@prisma/client"
 const { PrismaClient } = pkg
 const prisma = new PrismaClient()
 

export const selectSQLIdUser = async function (id) {
    try {
        let sql = `SELECT * FROM tbl_user WHERE id_user = ${id}`
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