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

export const UpdateSQLBaby = async function (baby) {
    try {
        
        let sql = `UPDATE tbl_bebe SET
        nome = '${baby.nome}',
        data_nascimento = '${baby.data_nascimento}',
        id_sexo = '${baby.id_sexo}',
        peso = '${baby.peso}',
        altura = '${baby.altura}',
        id_sangue = '${baby.id_sangue}',
        certidao_nascimento = '${baby.certidao_nascimento}',
        cpf = '${baby.cpf}',
        cartao_medico = '${baby.cartao_medico}',
        imagem_certidao = '${baby.imagem_certidao}'
        WHERE id_bebe = ${baby.id_bebe}`

        let resultSQLbaby = await prisma.$executeRawUnsafe(sql)
        if(resultSQLbaby){
            let getID = `SELECT * FROM tbl_bebe WHERE id_bebe = ${baby.id_bebe}`
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