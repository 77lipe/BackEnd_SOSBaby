/**************************************************
 * Autor: Felipe Vieira
 * Date: 02/10/25
 * Versão: 1.0
 * Desc: App que irá conter a camunicação com
 *       o Banco de Dados
 **************************************************/

 import pkg from "@prisma/client"
 const { PrismaClient } = pkg
 const prisma = new PrismaClient()

export const insertSqlItemRoutine = async function (dataRoutine){
    //console.log(dataRoutine);
    
    try {
        
        let sql = `INSERT INTO tbl_rotina_item (titulo, descricao, data_rotina, hora) VALUES (?, ?, ?, ?)`;

    const resultSql = await prisma.$executeRawUnsafe(
        sql,
        dataRoutine.titulo_item,
        dataRoutine.descricao,
        dataRoutine.data_rotina,
        dataRoutine.hora
    );

        if (resultSql) {

            let getID = `SELECT * FROM tbl_rotina_item ORDER BY id_item Desc LIMIT 1`
            const id = await prisma.$queryRawUnsafe(getID)

            return id[0]
        }else{
            return false
        }

    } catch (error) {
        console.log(error);
        return false     
    }
} 