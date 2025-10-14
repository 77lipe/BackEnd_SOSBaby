/*********************************************************
 * Autor: Felipe Vieira
 * Date: 30/09/25
 * Versão: 1.0
 * Desc: App que irá realizar a comunicação com o banco
 *       dados para DELETE DE ROTINA
 ********************************************************/
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const deleteSQLRoutineResponsable = async function(id){
    try {
        
        let sql = `DELETE FROM tbl_rotina WHERE id_rotina = ${id}`
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