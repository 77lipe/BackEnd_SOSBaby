import pkg from "@prisma/client"
const { PrismaClient } = pkg
const prisma = new PrismaClient()

export const SelectIdSQLEspecialidade = async function (id) {
    try {

        let sql = `SELECT * FROM tbl_especialidade WHERE id_especialidade = ${id}`
        let result = await prisma.$queryRawUnsafe(sql)

        if (result) {
            if (result) {
                return result
            } else {
                return false
            }
        } else {
            return false
        }

    } catch (error) {
        console.log(error)
        return false
    }
}
