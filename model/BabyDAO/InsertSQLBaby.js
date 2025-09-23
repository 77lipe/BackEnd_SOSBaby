/**************************************************
 * Autor: Felipe Vieira
 * Date: 18/09/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const insertSQLBaby = async function (baby) {
    try {
        
        let sql = `INSERT INTO tbl_bebe (
        nome,
        data_nascimento,
        id_sexo,
        peso,
        altura,
        id_sangue,
        certidao_nascimento,
        
        )`

    } catch (error) {
        
    }
}