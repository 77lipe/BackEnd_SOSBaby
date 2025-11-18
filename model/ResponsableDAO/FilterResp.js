/**************************************************
 * Autor: Felipe Vieira
 * Date: 17/11/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

import pkg from "@prisma/client"
const { PrismaClient } = pkg

const prisma = new PrismaClient()

export const NameFilterResp = async function(dataName){
    try {
        
        let sql = `SELECT * FROM vw_responsavel_info WHERE nome_user LIKE '%${dataName}%' order by id_user desc`
        let resultName = await prisma.$queryRawUnsafe(sql)
        
        if(resultName.length > 0){
            return resultName
        }else{
            return false
        }
        
    } catch (error) {
        console.log(error);
        return false
    }
}