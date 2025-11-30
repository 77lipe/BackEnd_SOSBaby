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

export const filterNameSQLDoctor = async function(name){
    try {
        
        let sql = `SELECT * FROM vw_medico_info WHERE nome_medico LIKE '%${name}%' ORDER BY id_medico DESC`
        let resultDoctor = await prisma.$queryRawUnsafe(sql)

        if(resultDoctor.length > 0){
            return resultDoctor
        }else{
            return false
        }
    }
    catch (error) {
        console.log(error)
        return false
    }
}