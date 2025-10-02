/**************************************************
 * Autor: Felipe Vieira
 * Date: 02/10/25
 * Versão: 1.0
 * Desc: App que irá conter a camunicação com
 *       o Banco de Dados
 **************************************************/

import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const insertSqlItemRoutine = async function (itemRoutine){
    try {
        
        let sql = `INSERT INTO tbl_rotina_item(
        id_rotina,
        titulo,
        descricao,
        hora
        ) VALUES (
        ${itemRoutine.id_rotina},
        ${itemRoutine.titulo},
        ${itemRoutine.descricao},
        ${itemRoutine.hora},
        )
        `
        const resultSql = await prisma.$executeRawUnsafe(sql)
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