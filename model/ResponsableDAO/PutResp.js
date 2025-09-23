/**************************************************
 * Autor: Felipe Vieira
 * Date: 18/09/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

 import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()


export const updateResp = async function(user){
    try {
        let sql = ` update tbl_responsavel set
            nome            = '${user.nome}',
            data_nascimento = '${user.data_nascimento}',
            cpf             = '${user.cpf}',
            telefone        = '${user.telefone}',
            cep             = '${user.cep}',
            id_sexo         = '${user.id_sexo}',
            arquivo         = '${user.arquivo}',
            cartao          = '${user.cartao}',
            id_user         = '${user.id_user}'    
            
            where id = '${user.id}'
        `
        let resultUser = await prisma.$executeRawUnsafe(sql)

        if(resultUser){
            return true
        }else{
            return false
        }


    } catch (error) {
        console.log(error)
        return false;
    }
}