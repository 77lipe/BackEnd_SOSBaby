/*********************************************************
 * Autor: Felipe Vieira
 * Date: 30/09/25
 * Versão: 1.0
 * Desc: App que irá realizar a comunicação com o banco
 *       dados para INSERT DE ROTINA
 ********************************************************/
 import pkg from "@prisma/client"
 const { PrismaClient } = pkg
 const prisma = new PrismaClient()
 

export const inserSQLRoutineResponsable = async function (dataRoutine){
    //console.log(dataRoutine);
    
    try {
        
        let sql = `INSERT INTO tbl_rotina (
        titulo,
        cor,
        id_user
        )VALUES(
        ?,
        ?,
        ?
        )`
        const resultSQL = await prisma.$executeRawUnsafe(sql,
        dataRoutine.titulo_rotina,
        dataRoutine.cor,
        dataRoutine.id_user)

        if (resultSQL) {
            let getID = `SELECT * FROM tbl_rotina ORDER BY id_rotina DESC LIMIT 1`
            let id = await prisma.$queryRawUnsafe(getID)
            return id[0]
        }else{
            return false
        }

    } catch (error) {
        console.log(error)
        return false
    }
}