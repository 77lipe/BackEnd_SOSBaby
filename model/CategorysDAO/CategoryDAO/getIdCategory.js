/**************************************************
 * Autor: Felipe Vieira
 * Date: 18/09/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export const getIdCategory = async function (id) {
    try {

        let sql = `SELECT * FROM tbl_categoria WHERE id_categoria = ?`
        let resultCategory = await prisma.$queryRawUnsafe(sql, id)

        if (resultCategory.length > 0) {
            return resultCategory
        }else{
            return false
        }
    }catch(error){
        console.log(error)
        return false;
    }
}