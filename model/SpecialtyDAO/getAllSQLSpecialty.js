import pkg from "@prisma/client"
const { PrismaClient } = pkg
const prisma = new PrismaClient()

export const ListSQLEspecialidade = async function () {
    try {

        let sql = `SELECT * FROM tbl_especialidade ORDER BY id_especialidade DESC`
        let result = await prisma.$queryRawUnsafe(sql)

        if (result) {
            return result
        } else {
            return false
        }

    } catch (error) {
        console.log(error)
        return false
    }
}
