import pkg from "@prisma/client"
const { PrismaClient } = pkg
const prisma = new PrismaClient()

export const GetByConvenioSQL = async function (id_convenio) {
    try {

        let sql = `
            SELECT * 
            FROM tbl_user_convenio
            WHERE id_convenio = ${id_convenio}
            ORDER BY id_user_convenio DESC
        `

        let result = await prisma.$queryRawUnsafe(sql)
        if(result){
            return result
        }

    } catch (error) {
        console.log(error)
        return false
    }
}
