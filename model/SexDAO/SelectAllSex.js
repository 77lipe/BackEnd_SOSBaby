/*******************************************************************
 * Autor: Eduardo Couto
 * Date: 18/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para Listar todos os  users
 *******************************************************************/


const {PrismaClient, Prisma} = require('@prisma/client')
const prisma = new PrismaClient()


const SelectAllSexSQL = async function(){
    try {
        let sql = 'select * from tbl_sexo order by id desc'

        let result = await prisma.$queryRawUnsafe(sql)

        if(result)
            return result
        else
            return false

    } catch (error) {
        console.log
        return false
    }
}