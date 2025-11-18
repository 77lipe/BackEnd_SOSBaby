import pkg from "@prisma/client"
const { PrismaClient } = pkg
const prisma = new PrismaClient()

export const insertSQLChamadaParticipante = async function (rel) {
    try {

        let sql = `
            INSERT INTO tbl_chamada_participante (
                id_chamada,
                id_user
            ) VALUES (
                '${rel.id_chamada}',
                '${rel.id_user}'
            )
        `

        let result = await prisma.$executeRawUnsafe(sql)

        if (result) {
            let getID = `
                SELECT * FROM tbl_chamada_participante 
                ORDER BY id_rel DESC LIMIT 1
            `
            let id = await prisma.$queryRawUnsafe(getID)
            return id[0]
        }

        return false

    } catch (error) {
        console.log(error)
        return false
    }
}
