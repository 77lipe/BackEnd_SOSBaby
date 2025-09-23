/**************************************************
 * Autor: Eduardo Couto 
 * Date: 18/09/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export const insertSQLGender = async function (sexo) {
    try {
        let sql = `INSERT INTO tbl_sexo (
            sexo
        )values(
            '${sexo.sexo}'
        )`

        let result = await prisma.$executeRawUnsafe(sql)
        if (result) {
            return true
        }else{
            return false
        }

    } catch (error) {
        console.log(error)
        return false;
    }
}