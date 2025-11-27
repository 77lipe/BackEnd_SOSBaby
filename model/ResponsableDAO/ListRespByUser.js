import pkg from "@prisma/client"
const { PrismaClient } = pkg
const prisma = new PrismaClient()

export const RespByUser = async function (id) {
    try {

        let sql = `SELECT * FROM vw_responsavel_completo_por_user WHERE id_user = ${id}`
        let resultUser = await prisma.$queryRawUnsafe(sql)

        if (resultUser.length > 0) {
            return resultUser
        }else{
            return false
        }


    } catch (error) {
        console.log(error)
        return false;
    }
    
}