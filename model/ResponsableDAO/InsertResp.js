/**************************************************
 * Autor: Felipe Vieira
 * Date: 16/09/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

const {PrismaClient, Prisma} = require('@prisma/client')
const prisma = new PrismaClient()

//import {insertUser} from "../../controller/Controller_users/InsertUser"

const insertSQLResp = async function (user) {
    try {
        
        let sql = `insert into tbl_responsavel(
        nome,
        data_nascimento,
        cpf,
        telefone,
        cep,
        id_sexo,
        arquivo,
        cartao,
        id_user
        )
        values(
        '${user.nome}',
        '${user.data_nascimento}',
        '${user.cpf}',
        '${user.telefone}',
        '${user.cep}',
        '${user.id_sexo}',
        '${user.arquivo}',
        '${user.cartao}',
        '${user.id_user}'
        )`

        let result = await prisma.$executeRawUnsafe(sql)
        if(result){
            let getID = `SELECT * FROM tbl_responsavel WHERE cpf = '${user.cpf}' ORDER BY id_responsavel DESC LIMIT 1`
            let ID = await prisma.$queryRawUnsafe(getID)

            return ID[0]
        }else{
            return false
        }


    } catch (error) {
        console.log(error);
        return false
    }
    
}