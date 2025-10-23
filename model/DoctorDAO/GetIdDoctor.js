/**************************************************
 * Autor: Felipe Vieira
 * Date: 30/09/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export const getIdSQLDoctor = async function(id){
    try {
        
        let sql = `SELECT * FROM tbl_medico WHERE id_medico = ${id}`
        let resultDoctor = await prisma.$queryRawUnsafe(sql)

        if(resultDoctor){
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