/**************************************************
 * Autor: Felipe Vieira
 * Date: 21/09/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

 import {PrismaClient} from '@prisma/client'
 const prisma = new PrismaClient()

 export const DeleteSQLBlood = async function (blood) {
    try {

        let sql = `DELETE FROM tbl_sangue WHERE id = ${blood.id}`
        let result = await prisma.$executeRawUnsafe(sql)

        if (result) {
            return true
        }else{
            return false
        }

    } catch (error) {
        console.log(error)
        return false
        
    }
 }