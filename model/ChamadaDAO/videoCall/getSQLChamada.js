import pkg from "@prisma/client"
const { PrismaClient } = pkg
const prisma = new PrismaClient()

export const selectChamadaById = async function (id_chamada) {
    try {
        let sql = `CALL visualizar_chamada_video(${id_chamada})`

        let result = await prisma.$queryRawUnsafe(sql)

        // Procedimentos no MySQL retornam arrays duplos:
        // [ [dados], [metadata] ]
        if (result && result[0] && result[0].length > 0) {
            return result[0][0]
        }

        return false
    } catch (error) {
        console.log(error)
        return false
    }
}
