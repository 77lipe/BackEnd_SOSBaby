import pkg from "@prisma/client"
const { PrismaClient } = pkg
const prisma = new PrismaClient()

export const SelectIdSQLConvenio = async function (id) {
    try {

        let sql = `SELECT * FROM tbl_convenio WHERE id_convenio = ${id}`
        let resultConvenio = await prisma.$queryRawUnsafe(sql)

        if (resultConvenio) {
            if (resultConvenio) {
                return resultConvenio
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
