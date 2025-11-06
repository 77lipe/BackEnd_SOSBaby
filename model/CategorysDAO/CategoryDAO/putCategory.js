/**************************************************
 * Autor: Felipe Vieira
 * Date: 16/10/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

 import pkg from "@prisma/client"
 const { PrismaClient } = pkg
 const prisma = new PrismaClient()

export const putCategory = async function (category) {
    try {
        let sql = `update tbl_categoria set
            nome_categoria = ?
            where id_categoria = ?`

        let resultCategory = await prisma.$executeRawUnsafe(
            sql,
            category.id_categoria,
            category.nome_categoria
            )
        
        if (resultCategory) {
            return true
        }else{
            return false
        }

    } catch (error) {
        console.log(error)
        return false;
    }
}