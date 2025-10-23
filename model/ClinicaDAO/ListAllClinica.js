/**************************************************
 * Autor: Isabelly Lima
 * Date: 23/10/25
 * Versão: 1.0
 * Desc: App que irá listar todas as clínicas.
 **************************************************/

import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export const ListSQLClinica = async function () {
    try {
        
        let sql = `SELECT * FROM tbl_clinica ORDER BY id DESC`
        let resultClinica = await prisma.$queryRawUnsafe(sql)

        if (resultClinica) {
            return resultClinica
        }else{
            return false
        }

    } catch (error) {
        console.log(error)
        return false
        
    }
}
    