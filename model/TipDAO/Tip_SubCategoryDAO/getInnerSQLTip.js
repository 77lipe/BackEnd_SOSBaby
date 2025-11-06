/**************************************************
 * Autor: Felipe Vieira
 * Date: 21/10/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

 import pkg from "@prisma/client"
 const { PrismaClient } = pkg
 const prisma = new PrismaClient()
 

export const getALLInnerSQLTip = async function(id){
    try {
        let sql = `SELECT tbl_dica.*
        FROM tbl_dica
        INNER JOIN tbl_dica_subcategoria
            ON tbl_dica.id_dica = tbl_dica_subcategoria.id_dica
            WHERE tbl_dica_subcategoria.id_subcategoria = ${id}`

        let result = await prisma.$queryRawUnsafe(sql)
        if(result.length > 0){
            return result
        }else{
            return false
        }
    } catch (error) {
        console.log(error)
        return false
    }
}