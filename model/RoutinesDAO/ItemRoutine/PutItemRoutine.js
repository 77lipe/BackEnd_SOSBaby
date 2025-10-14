/**************************************************
 * Autor: Felipe Vieira
 * Date: 02/10/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const putSQLItemRoutine = async function(itemRoutine){
    try {
        
        let sql = `UPDATE tbl_rotina_item SET
        id_rotina = ${itemRoutine.id_rotina},
        titulo = ${itemRoutine.titulo},
        descricao = ${itemRoutine.descricao},
        hora = ${itemRoutine.hora}
        WHERE id_item = ${itemRoutine.id_item}
        `
        const resultSQL = await prisma.$executeRawUnsafe(sql)
        if(resultSQL){
            return true
        }else{
            return false
        }

    } catch (error) {
        console.log(error)
        return false
    }
}