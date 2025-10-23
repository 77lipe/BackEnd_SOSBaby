/**************************************************
 * Autor: Isabelly Lima
 * Date: 23/10/25
 * Versão: 1.0
 * Desc: App que irá permitir o DELETE das 
 * inserções para o Banco de Dados
 **************************************************/

import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export const deleteClinica = async function(id) {
    try {

        let sql = `DELETE from tbl_clinica where id = ${id}`
        let resultClinica = await prisma.$executeRawUnsafe(sql, id)

        if (resultClinica) {
            return true
        }else{
            return false
        }

    } catch (error) {
        console.log(error)
        return false;
    }
    
}