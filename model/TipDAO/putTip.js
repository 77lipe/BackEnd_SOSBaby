/**************************************************
 * Autor: Felipe Vieira
 * Date: 14/10/25
 * Versão: 1.0
 * Desc: App que irá conter as inserções para
 *       o Banco de Dados
 **************************************************/

 import pkg from "@prisma/client"
 const { PrismaClient } = pkg
 const prisma = new PrismaClient()
 

export const putSQLTip = async function(dataTip){
    try {
        let sql = `UPDATE tbl_dicas SET
            titulo = '${dataTip.titulo}',
            conteudo = '${dataTip.conteudo}',
            imagem = '${dataTip.imagem}',
            id_tipo_dica = '${dataTip.id_categoria}'

        WHERE id_dica = ${dataTip.id_dica}`

        let result = await prisma.$executeRawUnsafe(sql)
        if(result){
            return true
        }else{
            return false
        }
    } catch (error) {
        console.log(error)
        return false
    }
}