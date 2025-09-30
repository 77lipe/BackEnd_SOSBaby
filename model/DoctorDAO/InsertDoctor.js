/**************************************************
 * Autor: Felipe Vieira
 * Date: 30/09/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export const insertSQLDoctor = async function(dataDoctor){
    try {
        
        let sql = `CALL insertMedico(?, ?, ?, ?, ?, ?, ?, ?)`
        let resultDoctor = await prisma.$executeRawUnsafe(
            sql,
            dataDoctor.nome,
            dataDoctor.email,
            dataDoctor.telefone,
            dataDoctor.crm,
            dataDoctor.cpf,
            dataDoctor.foto,
            dataDoctor.id_sexo,
            dataDoctor.id_user
        )

        if(resultDoctor){
            return true
        }else{
            return false
        }



    } catch (error) {
        console.log(error)
        return false
    }
}