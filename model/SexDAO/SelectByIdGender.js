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
 

 export const idGender = async function (id) {
    try {
        let sql = `SELECT * FROM tbl_sexo WHERE id_sexo = (?)`
        let result = await prisma.$queryRawUnsafe(
            sql,
            id
        )
        if (result) {
            return result
        } else {
            return false
        }
    } catch (error) {
        console.log(error)
        return false
    }
}