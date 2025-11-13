/**************************************************
 * Autor: Felipe Vieira
 * Date: 13/11/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

import pkg from "@prisma/client"
const { PrismaClient } = pkg

const prisma = new PrismaClient()

export const NameFilter = async function(dataName){
    try {
        
        let sql = `SELECT * FROM tbl_user WHERE nome_user LIKE  '%${dataName}%' order by id_user desc`
        let resultName = await prisma.$queryRawUnsafe(sql)
        
        if(resultName.length > 0){
            return resultName
        }else{
            return false
        }
        
    } catch (error) {
        
    }
}