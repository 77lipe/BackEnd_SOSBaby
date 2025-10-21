/**************************************************
 * Autor: Felipe Vieira
 * Date: 21/10/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export const getAllSQLMessage = async function(){
    try {
        
        let sql = `SELECT * FROM tbl_messager ORDER BY id_mensagem DESC`
        
        let result = await prisma.$queryRawUnsafe(sql)
        if(result){ 
            return result
        }else{
            return false
        }

    } catch (error) {
        console.log(error)
        return false
    }
}