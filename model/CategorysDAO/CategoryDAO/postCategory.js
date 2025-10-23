/**************************************************
 * Autor: Felipe Vieira
 * Date: 16/10/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export const postCategory = async function (category) {
    try {
        let sql = `INSERT INTO tbl_categoria(
            nome_categoria
        ) VALUES (
        ?
         )`

        let resultCategory = await prisma.$executeRawUnsafe(
            sql,
            category.nome_categoria
            )
        
        if (resultCategory !== undefined && resultCategory !== null) {
            return true
        }else{
            return false
        }

    } catch (error) {
        console.log(error)
        return false;
    }
}