/**************************************************
 * Autor: Felipe Vieira
 * Date: 23/09/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const ListSQLBaby = async function () {
    try {
        
        let sql = `SELECT * FROM tbl_bebe order by id_bebe desc`
        let resultBaby = await prisma.$queryRawUnsafe(sql)

        if (resultBaby) {
            return resultBaby
        } else {
            return false
        }

    } catch (error) {
        console.log(error)
        return false
        
    }
}