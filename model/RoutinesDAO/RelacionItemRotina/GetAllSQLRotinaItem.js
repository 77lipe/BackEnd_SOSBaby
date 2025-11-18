import pkg from "@prisma/client"
const { PrismaClient } = pkg

const prisma = new PrismaClient()
export const GetAllSQLRotinaItem = async function (id_rotina){
    try {
        
        let sql = `SELECT * FROM tbl_rotina_item_relacionamento WHERE id_rotina = ? order by asc`
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