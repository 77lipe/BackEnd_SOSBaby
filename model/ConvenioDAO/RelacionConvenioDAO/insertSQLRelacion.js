import pkg from "@prisma/client"
const { PrismaClient } = pkg
const prisma = new PrismaClient()

export const InsertSQLUserConvenio = async function (data) {
    try {

        let sql = `
        INSERT INTO tbl_user_convenio (
            id_user,
            id_convenio
        )
        VALUES
        (
            '${data.id_user}',
            '${data.id_convenio}'
        )
        `

        let resultInsert = await prisma.$executeRawUnsafe(sql)

        if (resultInsert) {
            let getID = `
                SELECT * 
                FROM tbl_user_convenio 
                ORDER BY id_user_convenio DESC 
                LIMIT 1
            `
            let result = await prisma.$queryRawUnsafe(getID)
            return result[0]
        }

    } catch (error) {
        console.log(error)
        return false
    }
}
