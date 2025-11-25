import pkg from "@prisma/client"
const { PrismaClient } = pkg
const prisma = new PrismaClient()

export const GetByUserSQL = async function (id_user) {
    try {

        let sql = `
            SELECT *
            FROM tbl_user_convenio
            WHERE id_user = ${id_user}
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
