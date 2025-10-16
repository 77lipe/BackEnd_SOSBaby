/**************************************************
 * Autor: Felipe Vieira
 * Date: 16/10/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export const postSubCategory = async function (subCategory) {
    try {
        let sql = `INSERT INTO tbl_subcategoria(
            nome_subcategoria,
        ) VALUES (
        ?
         )`

        let resultSubCategory = await prisma.$executeRawUnsafe(
            sql,
            subCategory.nome_subcategoria
            )
        
        if (resultSubCategory) {
            let getID = `SELECT * FROM tbl_subcategoria ORDER BY id_subcategoria DESC LIMIT 1`
            return true
        }else{
            return false
        }

    } catch (error) {
        console.log(error)
        return false;
    }
}