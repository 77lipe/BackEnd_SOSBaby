import pkg from "@prisma/client"
const { PrismaClient } = pkg

const prisma = new PrismaClient()
export const GetAllSQLRotinaItem = async function (id_rotina){
    try {
        
        let sql = `SELECT * FROM vw_relacionamentos_completos_usuario WHERE id_user = ?`
        const resultSQL = await prisma.$queryRawUnsafe(sql, id_rotina)

        if (resultSQL) {
            return resultSQL
        }else{
            return false
        }

    } catch (error) {
        console.log(error)
        return false
    }
}