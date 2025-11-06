/**************************************************
 * Autor: Felipe Vieira
 * Date: 23/09/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

 import pkg from "@prisma/client"
 const { PrismaClient } = pkg
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
        cpf,
        cartao_medico,
        imagem_certidao
        )
        VALUES
        (
        '${baby.nome}',
        '${baby.data_nascimento}',
        '${baby.id_sexo}',
        '${baby.peso}',
        '${baby.altura}',
        '${baby.id_sangue}',
        '${baby.certidao_nascimento}',
        '${baby.cpf}',
        '${baby.cartao_medico}',
        '${baby.imagem_certidao}'
        )`

        let resultSQLbaby = await prisma.$executeRawUnsafe(sql)

        if(resultSQLbaby){
            let getID = `SELECT * FROM tbl_bebe ORDER BY id_bebe DESC LIMIT 1`
            let id = await prisma.$queryRawUnsafe(getID)

            return id[0]
        }
        return false

    } catch (error) {
        console.log(error)
        return false
        
    }
}