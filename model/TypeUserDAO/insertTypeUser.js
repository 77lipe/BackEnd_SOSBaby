/**************************************************
 * Autor: Eduardo
 * Date: 16/09/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/
 import pkg from "@prisma/client"
 const { PrismaClient } = pkg
 const prisma = new PrismaClient()
 

export const insertTypeUserSQL = async function(tipo) {
    try {
        let sql = `insert into tbl_type_user(
                    tipo
                    )values(
                     '${tipo.tipo}'
                    )`

        let result = await prisma.$executeRawUnsafe(sql)
        if (result) {
            let getID = `SELECT * FROM tbl_type_user ORDER BY id_tipo DESC LIMIT 1`
            let id = await prisma.$queryRawUnsafe(getID)

            return id[0]
        }else{
            return false
        }
    } catch (error) {
        console.log(error)
        return false
    }
}