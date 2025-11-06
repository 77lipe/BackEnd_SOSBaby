/**************************************************
 * Autor: Eduardo Couto 
 * Date: 18/09/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

 import pkg from "@prisma/client"
 const { PrismaClient } = pkg
 const prisma = new PrismaClient()
 

export const insertSQLGender = async function (sexo) {
    try {
        let sql = `Insert into tbl_sexo(
        sexo
        )VALUES(
        ?
        )`

        let resultSex = await prisma.$executeRawUnsafe(
            sql,
            sexo.sexo
            )
        
        if (resultSex) {
            let getID = `SELECT * FROM tbl_sexo ORDER BY id_sexo DESC LIMIT 1`
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