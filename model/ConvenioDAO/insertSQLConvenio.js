import pkg from "@prisma/client"
const { PrismaClient } = pkg
const prisma = new PrismaClient()

export const insertSQLConvenio = async function (convenio) {
    try {

        let sql = `
        INSERT INTO tbl_convenio (
            nome
        )
        VALUES
        (
            '${convenio.nome}'
        )`

        let resultSQLConvenio = await prisma.$executeRawUnsafe(sql)

        if (resultSQLConvenio) {
            let getID = `SELECT * FROM tbl_convenio ORDER BY id_convenio DESC LIMIT 1`
            let id = await prisma.$queryRawUnsafe(getID)

            return id[0]
        }

        return false

    } catch (error) {
        console.log(error)
        return false
    }
}
