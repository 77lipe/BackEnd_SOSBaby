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

export const getAllSubCategory = async function () {
    try {

        let sql = `SELECT * FROM tbl_subcategoria`
        let resultSubCategory = await prisma.$queryRawUnsafe(sql)

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