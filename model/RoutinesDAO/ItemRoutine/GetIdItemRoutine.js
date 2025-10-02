/**************************************************
 * Autor: Felipe Vieira
 * Date: 02/10/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const getIdSQLItemRoutine = async function(id){
    try {
        
        let sql = `SELECT * FROM tbl_rotina_item WHERE id_item = ${id}`
        const resultSQL = await prisma.$queryRawUnsafe(sql)
        if (resultSQL) {
            return true
        }else{
            return false
        }
    } catch (error) {
        console.log(error)
        return false
    }
}