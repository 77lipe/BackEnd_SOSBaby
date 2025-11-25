import pkg from "@prisma/client"
const { PrismaClient } = pkg
const prisma = new PrismaClient()

export const deleteSQLRoutine = async function(id){
    try {
        
        let sql = `DELETE FROM tbl_rotina_item_relacionamento WHERE id_rotina = ${id}`
        const resultSQL = await prisma.$executeRawUnsafe(sql)
        if(resultSQL){
            return true
        }else{
            return false
        } 

    } catch (error) {
        console.log(error)
        return false
    }
}