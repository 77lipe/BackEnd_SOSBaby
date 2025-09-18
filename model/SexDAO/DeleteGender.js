/**************************************************
 * Autor: Eduardo Couto
 * Date: 18/09/25
 * Versão: 1.0
 * Desc: App que irá conter os deletes para
 *       o Banco de Dados
 **************************************************/


const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const DeleteGenderSQL = async function(id) {
    try {
        let sql = `DELETE from tbl_sexo where id = ${id}`
        let result =  await prisma.executeRawUnsafe(sql, id)

        if (result) {
            return true
        } else {
            return false
        }
    } catch (error) {
        console.log(error)
        return false
    }
}