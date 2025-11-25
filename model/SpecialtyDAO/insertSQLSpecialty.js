import pkg from "@prisma/client"
const { PrismaClient } = pkg
const prisma = new PrismaClient()

export const insertSQLEspecialidade = async function (especialidade) {
    try {

        let sql = `
        INSERT INTO tbl_especialidade (
            especialidade
        )
        VALUES
        (
            '${especialidade.especialidade}'
        )`

        let resultSQL = await prisma.$executeRawUnsafe(sql)

        if (resultSQL) {
            let getID = `SELECT * FROM tbl_especialidade ORDER BY id_especialidade DESC LIMIT 1`
            let id = await prisma.$queryRawUnsafe(getID)
            return id[0]
        }

        return false

    } catch (error) {
        console.log(error)
        return false
    }
}
