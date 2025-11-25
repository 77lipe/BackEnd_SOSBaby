import pkg from "@prisma/client"
const { PrismaClient } = pkg
const prisma = new PrismaClient()

export const DeleteSQLEspecialidade = async function (id) {
    try {

        let sql = `DELETE FROM tbl_especialidade WHERE id_especialidade = ${id}`
        let result = await prisma.$executeRawUnsafe(sql)

        if (result) {
            return true
        } else {
            return false
        }

    } catch (error) {
        console.log(error)
        return false
    }
}
