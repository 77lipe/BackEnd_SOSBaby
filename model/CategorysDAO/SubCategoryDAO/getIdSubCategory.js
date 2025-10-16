/**************************************************
 * Autor: Felipe Vieira
 * Date: 16/10/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export const getIdSubCategory = async function (id) {
    try {

        let sql = `SELECT * FROM tbl_subcategoria WHERE id_subcategoria = ?`
        let resultSubCategory = await prisma.$queryRawUnsafe(sql, id)

        if (resultSubCategory.length > 0) {
            return resultSubCategory
        }else{
            return false
        }
    }catch(error){
        console.log(error)
        return false;
    }
}