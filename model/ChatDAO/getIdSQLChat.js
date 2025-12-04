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

export const getIdSQLChat = async function(user1, user2) {
    try {
        const sql = `
            SELECT *
            FROM tbl_chat
            WHERE (user1_id = ? AND user2_id = ?)
               OR (user1_id = ? AND user2_id = ?)
            LIMIT 1;
        `;

        const result = await prisma.$queryRawUnsafe(sql, user1, user2, user2, user1);

        if (result.length > 0) {
            return result[0]; // chat encontrado
        }

        return false; // não existe
    } catch (error) {
        console.log(error);
        return false;
    }
}
