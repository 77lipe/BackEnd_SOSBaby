/*********************************************************
 * Autor: Felipe Vieira
 * Date: 02/10/25
 * Versão: 1.0
 * Desc: App que irá realizar a comunicação com o banco
 *       dados para GET ID DE ROTINA
 ********************************************************/
import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export const getIdSQLRoutineResponsable = async function (id){
    try {
        
        let sql = `SELECT * FROM tbl_rotina WHERE id_rotina = ?`
        let resultSQL = await prisma.$queryRawUnsafe(sql, id)

        if (resultSQL) {
            return resultSQL
        }else{
            return false
        }

    } catch (error) {
        console.log(error)
        return false
    }
}