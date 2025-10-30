/**************************************************
 * Autor: Isabelly Lima
 * Date: 23/10/25
 * Versão: 1.0
 * Desc: App que irá atualizar a clínica por id para
 *       o Banco de Dados.
 **************************************************/

import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()


export const updateClinica = async function(clinica){
    try {
        let sql = ` update tbl_clinica set
            nome      = '${clinica.nome}',
            cnpj      = '${clinica.cnpj}',
            telefone  = '${clinica.telefone}',
            email     = '${clinica.email}',
            cidade    = '${clinica.cidade}',
            rua       = '${clinica.rua}',
            bairro    = '${clinica.bairro}',
            numero    = '${clinica.numero}',
               
            where id = '${clinica.id}'
        `
        let resultClinica = await prisma.$executeRawUnsafe(sql)

        if(resultClinica){
            return true
        }else{
            return false
        }


    } catch (error) {
        console.log(error)
        return false;
    }
}