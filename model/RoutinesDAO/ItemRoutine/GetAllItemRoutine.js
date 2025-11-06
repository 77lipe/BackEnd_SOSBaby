/**************************************************
 * Autor: Felipe Vieira
 * Date: 02/10/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/
 import pkg from "@prisma/client"
 const { PrismaClient } = pkg
 const prisma = new PrismaClient()

export const getAllSQLItemRoutine = async function(){
    try {
        
        let sql = `SELECT * FROM tbl_rotina_item ORDER BY id_item DESC`
        const resultSQL = await prisma.$queryRawUnsafe(sql)
        
        if (resultSQL) {
            return resultSQL
        }else{
            return false
        }

    } catch (error) {
        console.log(error)
        return false
    }
}