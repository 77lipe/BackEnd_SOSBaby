import pkg from "@prisma/client"
const { PrismaClient } = pkg
const prisma = new PrismaClient()

export const DeleteSQLConvenio = async function (id) {
    try {

        let sql = `DELETE FROM tbl_convenio WHERE id_convenio = ${id}`
        let resultSQLConvenio = await prisma.$executeRawUnsafe(sql)

        if (resultSQLConvenio) {
            return true
        } else {
            return false
        }

    } catch (error) {
        console.log(error)
        return false
    }
}
