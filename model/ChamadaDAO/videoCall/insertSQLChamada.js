import pkg from "@prisma/client"
const { PrismaClient } = pkg
const prisma = new PrismaClient()

export const insertSQLChamada = async function (chamada) {
    try {

        let sql = `
            INSERT INTO tbl_chamada_video (
                nome_chamada
            ) VALUES (
                '${chamada.nome_chamada}'
            )
        `

        let result = await prisma.$executeRawUnsafe(sql)

        if (result) {
            let getID = `SELECT * FROM tbl_chamada_video ORDER BY id_chamada DESC LIMIT 1`
            let id = await prisma.$queryRawUnsafe(getID)
            return id[0]
        }

        return false

    } catch (error) {
        console.log(error)
        return false
    }
}
