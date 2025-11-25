/**************************************************
 * Autor: Felipe Vieira
 * Date: 21/09/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

 import pkg from "@prisma/client"
 const { PrismaClient } = pkg
 const prisma = new PrismaClient()

export const SelectIdSQLBlood = async function (id){
    console.log(id);
    
    try {
        
        let sql = `SELECT * FROM tbl_sangue WHERE id_sangue = ${id}`
        let resultBlood = await prisma.$queryRawUnsafe(sql)
        console.log(resultBlood[0]);
        
        
        if(resultBlood.length > 0){
            return resultBlood
        }else{
            return false
        }


    } catch (error) {
        console.log(error)
        return false
        
    }
}