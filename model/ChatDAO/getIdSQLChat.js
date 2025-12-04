/**************************************************
 * Autor: Felipe Vieira
 * Date: 21/10/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

import pkg from "@prisma/client"
const { PrismaClient } = pkg
const prisma = new PrismaClient()

export const getIdSQLChat = async function(user1_id, user2_id){
    try {

        const sql = `
            SELECT * 
            FROM tbl_chat 
            WHERE user1_id = ? AND user2_id = ?;
        `;

        const result = await prisma.$queryRawUnsafe(sql, user1_id, user2_id);

        if (result.length > 0)
            return result[0];
        else
            return false;

    } catch (error) {
        console.log("Erro no getIdSQLChat:", error);
        return false;
    }
}