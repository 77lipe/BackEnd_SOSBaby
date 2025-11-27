 import pkg from "@prisma/client"
 const { PrismaClient } = pkg
 const prisma = new PrismaClient()

export const getIdSQLDoctorByUser = async function(id){
    try {
        
        let sql = `SELECT * FROM vw_medico_completo_por_user WHERE id_user = ${id}`
        let resultDoctor = await prisma.$queryRawUnsafe(sql)
        console.log(resultDoctor);
        

        if(resultDoctor){
            return resultDoctor
        }else{
            return false
        }
    }
    catch (error) {
        console.log(error)
        return false
    }
}