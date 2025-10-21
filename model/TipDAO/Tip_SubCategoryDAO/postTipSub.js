/**************************************************
 * Autor: Felipe Vieira
 * Date: 21/10/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export const postSQLTipSubCategory = async function(dataTipSubCategory){
    try {
        let sql = `INSERT INTO tbl_dicas_subcategorias (
            id_dica,
            id_subcategoria
        )VALUES(
            '${dataTipSubCategory.id_dica}',
            '${dataTipSubCategory.id_subcategoria}'
        )`

        let result = await prisma.$executeRawUnsafe(sql)
        if(result){
            return true
        }else{
            return false
        }
    }catch (error) {
        console.log(error)
        return false
    }
}