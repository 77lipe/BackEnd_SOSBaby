import pkg from "@prisma/client"
const { PrismaClient } = pkg
const prisma = new PrismaClient()

export const ListSQLConvenio = async function () {
    try {

        let sql = `SELECT * FROM tbl_convenio ORDER BY id_convenio DESC`
        let resultConvenio = await prisma.$queryRawUnsafe(sql)

        if (resultConvenio) {
            return resultConvenio
        } else {
            return false
        }

    } catch (error) {
        console.log(error)
        return false
    }
}
