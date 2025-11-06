/**************************************************
 * Autor: Felipe Vieira
 * Date: 18/09/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

 import pkg from "@prisma/client"
 const { PrismaClient } = pkg
 const prisma = new PrismaClient()

export const getAllCategory = async function () {
    try {

        let sql = `SELECT * FROM tbl_categoria`
        let resultCategory = await prisma.$queryRawUnsafe(sql)

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