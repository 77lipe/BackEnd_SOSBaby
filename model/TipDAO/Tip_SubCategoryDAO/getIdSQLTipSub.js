/**************************************************
 * Autor: Felipe Vieira
 * Date: 21/10/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export const getIdSQLTipSubCategory = async function(id){
    try {
        let sql = `SELECT * FROM tbl_dica_subcategoria WHERE id_relacionamento = ${id}`

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
