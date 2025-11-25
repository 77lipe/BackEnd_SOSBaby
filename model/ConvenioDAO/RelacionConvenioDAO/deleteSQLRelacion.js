import pkg from "@prisma/client"
const { PrismaClient } = pkg
const prisma = new PrismaClient()

export const DeleteUserConvenioSQL = async function (id) {
    try {

        let sql = `
            DELETE FROM tbl_user_convenio 
            WHERE id_user_convenio = ${id}
        `

        let result = await prisma.$executeRawUnsafe(sql)
        if(result){
            return true
        }else{
            return false
        }

    } catch (error) {
        console.log(error)
        return false
    }
}
