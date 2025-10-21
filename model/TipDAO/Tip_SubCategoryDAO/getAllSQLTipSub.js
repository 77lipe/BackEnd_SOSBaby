/**************************************************
 * Autor: Felipe Vieira
 * Date: 21/10/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export const getAllSQLTipSubCategory = async function(){
    try {
        let sql = `SELECT * FROM tbl_dica_subcategoria`

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