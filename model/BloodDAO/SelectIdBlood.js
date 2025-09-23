/**************************************************
 * Autor: Felipe Vieira
 * Date: 21/09/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

import {PrismaClient} from '@prisma/client' 
const prisma = new PrismaClient()

export const SelectIdSQLBlood = async function (id){
    try {
        
        let sql = `SELECT * FROM tbl_sangue WHERE id = ${id}`
        let resultBlood = await prisma.$queryRawUnsafe(sql)
        
        if(resultBlood){
            return true
        }else{
            return false
        }


    } catch (error) {
        console.log(error)
        return false
        
    }
}