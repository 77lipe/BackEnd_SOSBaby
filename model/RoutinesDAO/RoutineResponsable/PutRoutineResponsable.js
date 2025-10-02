/*********************************************************
 * Autor: Felipe Vieira
 * Date: 30/09/25
 * Versão: 1.0
 * Desc: App que irá realizar a comunicação com o banco
 *       dados para PUT DE ROTINA
 ********************************************************/
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const putSQLRoutineResponsable = async function (dataRoutine){
    try {
        
        let sql = `UPDATE tbl_rotina SET
        titulo = ?,
        data_rotina = ?,
        cor = ?,
        id_user = ?
        WHERE id_rotina = ?`

        const resultSQL = await prisma.$executeRawUnsafe(
            sql,
            dataRoutine.titulo,
            dataRoutine.data_rotina,
            dataRoutine.cor,
            dataRoutine.id_user,
            dataRoutine.id_rotina
        )

        if (resultSQL) {
            
        }

    } catch (error) {
        
    }
}