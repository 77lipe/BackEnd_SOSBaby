/**************************************************
 * Autor: Felipe Vieira
 * Date: 30/09/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

 import pkg from "@prisma/client"
 const { PrismaClient } = pkg
 const prisma = new PrismaClient()

export const updateSQLDoctor = async function(id, dataDoctor){
    try {
        
        let sql = `UPDATE SET tbl_medico
        ?, ?, ?, ?, ?, ?, ?, ?
        WHERE id_medico = ?`
        let resultDoctor = await prisma.$executeRawUnsafe(
            sql,
            dataDoctor.nome,
            dataDoctor.email,
            dataDoctor.telefone,
            dataDoctor.crm,
            dataDoctor.cpf,
            dataDoctor.foto,
            dataDoctor.id_sexo,
            dataDoctor.id_user,
            id
        )

        if(resultDoctor){
            return true
        }else{
            return false
        }
    }
    catch (error) {
        console.log(error)
        return false
    }
}
    