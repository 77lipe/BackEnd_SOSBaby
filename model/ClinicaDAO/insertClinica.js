/**************************************************
 * Autor: Isabelly Lima
 * Date: 23/10/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

 import pkg from "@prisma/client"
 const { PrismaClient } = pkg
 const prisma = new PrismaClient()

export const insertSQLClinica = async function (clinica) {
    //console.log(clinica);
    
    try {
        
        let sql = `INSERT INTO tbl_clinica (
        nome,
        cnpj,
        telefone,
        email,
        cidade,
        rua,
        bairro,
        numero,
        id_user
        )
        VALUES
        (
        '${clinica.nome}',
        '${clinica.cnpj}',
        '${clinica.telefone}',
        '${clinica.email}',
        '${clinica.cidade}',
        '${clinica.rua}',
        '${clinica.bairro}',
        '${clinica.numero}',
        '${clinica.id_user}'
        )`

        let resultSQLClinica = await prisma.$executeRawUnsafe(sql)

        if(resultSQLClinica){
            let getID = `SELECT * FROM tbl_clinica ORDER BY id_clinica DESC LIMIT 1`
            let id = await prisma.$queryRawUnsafe(getID)

            return id[0]
        }
        return false

    } catch (error) {
        console.log(error)
        return false
        
    }
}