import pkg from "@prisma/client"
const { PrismaClient } = pkg

const prisma = new PrismaClient()
export const getSQLAllRoutine = async function () {
    try {
        
        let sql = 'SELECT * FROM view_todas_rotinas_com_itens'

        let resultSQL = await prisma.$queryRawUnsafe(sql)
        if(resultSQL){
            return resultSQL
        }
    } catch (error) {
        
    }
}