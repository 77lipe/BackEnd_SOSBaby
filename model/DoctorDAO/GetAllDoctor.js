/**************************************************
 * Autor: Felipe Vieira
 * Date: 30/09/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

 import pkg from "@prisma/client"
 const { PrismaClient } = pkg
 const prisma = new PrismaClient()

export const getAllSQLDoctor = async function(){
    try {
        
        let sql = `SELECT * FROM vw_all_medico`
        let resultDoctor = await prisma.$queryRawUnsafe(sql)

        if(resultDoctor){
            return true
        }else{
            return false
        }
    }
    catch (error) {
        console.log(error)
        return false
    }
}