/*******************************************************************
 * Autor: Eduardo Couto
 * Date: 16/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações dos dados recebidos para Listar todos os  users
 *******************************************************************/


 import pkg from "@prisma/client"
 const { PrismaClient } = pkg
 const prisma = new PrismaClient()
 


export const SelectAllTypeUsersSQL = async function(){
    try {
        let sql = 'select * from tbl_type_user order by id desc'

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