/**************************************************
 * Autor: Felipe Vieira
 * Date: 21/10/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export const deleteSQLTipSubCategory = async function (id) {
    try {
        
        let sql = `DELETE FROM tbl_dicas_subcategorias where id_dica_subcategoria = ${id}`
        let resultTipSub = await prisma.$executeRawUnsafe(sql)

        if (resultTipSub) {
            return true
        }else{
            return false
        }
       
    }catch (error) {
        console.log(error)
        return false;
    }
}