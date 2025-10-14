/**************************************************
 * Autor: Felipe Vieira
 * Date: 16/09/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/


import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export const idTypeUser = async function (id) {
    try {

        let sql = `SELECT * FROM tbl_type_user  WHERE id_tipo = ${id} `
        let result = await prisma.$queryRawUnsafe(sql)
        
        if (result) {
            return result
        } else {
            return false
        }
    } catch (error) {
        console.log(error)
        return false
    }
}