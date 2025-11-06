/**************************************************
 * Autor: Felipe Vieira
 * Date: 21/09/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/
 import pkg from "@prisma/client"
 const { PrismaClient } = pkg
 const prisma = new PrismaClient()

 export const InsertSQLBlood = async function (blood) {
    try {
        let sql = `INSERT INTO tbl_sangue (
            tipo_sanguineo
        )VALUES(
            '${blood.tipo_sanguineo}'
        )`

        let result = await prisma.$executeRawUnsafe(sql)
        if (result) {
            return true
        }else{
            return false
        }

    } catch (error) {
        console.log(error)
        return false;
    }
}