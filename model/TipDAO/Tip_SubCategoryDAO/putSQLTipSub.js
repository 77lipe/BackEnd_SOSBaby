/**************************************************
 * Autor: Felipe Vieira
 * Date: 21/10/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export const putSQLTipSubCategory = async function(idTipSubCategory, dataTipSubCategory){
    try {
        let sql = `UPDATE tbl_dica_subcategoria SET
            id_dica = '${dataTipSubCategory.id_dica}',
            id_subcategoria = '${dataTipSubCategory.id_subcategoria}'
        WHERE id_dica_subcategoria = ${idTipSubCategory}`

        let result = await prisma.$executeRawUnsafe(sql)
        if(result > 0){
            return result[0]
        }else{
            return false
        }
    } catch (error) {
        console.log(error)
        return false
    }
}