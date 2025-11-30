import pkg from "@prisma/client"
const { PrismaClient } = pkg
const prisma = new PrismaClient()

export const insertSQLRelacionEspecialidade = async function (especialidade) {
    console.log("DADOS PARA RELACIONAMENTO:", especialidade);
    
    try {

        let sql = `
        INSERT INTO tbl_user_especialidade (
            id_user,
            id_especialidade
        )
        VALUES
        (
            '${especialidade.id_user}',
            '${especialidade.id_especialidade}'
        )`

        let resultSQL = await prisma.$executeRawUnsafe(sql)

        if (resultSQL) {
            let getID = `SELECT * FROM tbl_user_especialidade ORDER BY id_user_especialidade DESC LIMIT 1`
            let id = await prisma.$queryRawUnsafe(getID)
            return id[0]
        }

        return false

    } catch (error) {
        console.log(error)
        return false
    }
}