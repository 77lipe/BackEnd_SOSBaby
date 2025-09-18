/**************************************************
 * Autor: Eduardo Couto
 * Date: 18/09/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

 import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()


export const updateTypeUser = async function(type){
    try {
        let sql = `UPDATE tbl_type_user set
                    tipo = '${type.tipo}', 
                    where id = '${type.id_user_type}'
                    `
        let result = await prisma.$executeRawUnsafe(sql)

        if(result){
            return true
        }else{
            return false
        }


    } catch (error) {
        console.log(error)
        return false;
    }
}
