/**************************************************
 * Autor: Felipe Vieira
 * Date: 16/09/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

 import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export const idResp = async function (id) {
    try {

        let sql = `SELECT * FROM tbl_responsavel WHERE id_responsavel = ${id}`
        let resultUser = await prisma.$queryRawUnsafe(sql)

        if (resultUser.length > 0) {
            return resultUser
        }else{
            return false
        }


    } catch (error) {
        console.log(error)
        return false;
    }
    
}