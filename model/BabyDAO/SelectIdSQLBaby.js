/**************************************************
 * Autor: Felipe Vieira
 * Date: 23/09/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const SelectIdSQLBaby = async function (id) {
    try {
        
        let sql = `SELECT * FROM tbl_bebe WHERE id_bebe = ${id}`
        let resultBaby = await prisma.$queryRawUnsafe(sql)

        if (resultBaby) {
            if(resultBaby){
                return resultBaby
            }else{
                return false
            }
        } else {
            return false
        }

    } catch (error) {
        console.log(error)
        return false
    }
}