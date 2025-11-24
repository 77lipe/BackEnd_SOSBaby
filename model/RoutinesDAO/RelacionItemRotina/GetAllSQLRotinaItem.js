import pkg from "@prisma/client"
const { PrismaClient } = pkg

const prisma = new PrismaClient()
export const GetAllSQLRotinaItem = async function (id_rotina){
    try {
        
        let sql = `SELECT * FROM view_rotina_com_itens WHERE id_rotina = ? order by hora asc`
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