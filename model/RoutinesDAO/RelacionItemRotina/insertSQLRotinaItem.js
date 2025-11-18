import pkg from "@prisma/client"
const { PrismaClient } = pkg

const prisma = new PrismaClient()
export const insertSQLRotinaItem = async function (dataRotinaItem){
    try {
        
        let sql = `INSERT INTO tbl_rotina_item_relacionamento (
        id_rotina,
        id_item
        )VALUES(
        ?,
        ?
        )`
        const resultSQL = await prisma.$executeRawUnsafe(sql,
        dataRotinaItem.id_rotina,
        dataRotinaItem.id_item)

        if (resultSQL) {
            return true
        }else{
            return false
        }

    } catch (error) {
        console.log(error)
        return false
    }
}