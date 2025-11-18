import pkg from "@prisma/client"
const { PrismaClient } = pkg
const prisma = new PrismaClient()

export const deleteSQLChamada = async function (id) {
    try {

        let sql = `
            DELETE FROM tbl_chamada_video
            WHERE id_chamada = ${id}
        `

        let result = await prisma.$executeRawUnsafe(sql)
        if(result){
            return result 
        }

    } catch (error) {
        console.log(error)
        return false
    }
}
