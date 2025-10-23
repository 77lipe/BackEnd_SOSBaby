/**************************************************
 * Autor: Felipe Vieira
 * Date: 21/10/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export const getALLInnerSQLSubCategory = async function(id){
    try {
        let sql = `SELECT tbl_subcategoria.*
        FROM tbl_subcategoria
        INNER JOIN tbl_dica_subcategoria
            ON tbl_subcategoria.id_subcategoria = tbl_dica_subcategoria.id_subcategoria
            WHERE tbl_dica_subcategoria.id_dica = ${id}`

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