
import pkg from "@prisma/client"
const { PrismaClient } = pkg

const prisma = new PrismaClient()

export const FilterSpecialtyByClinic = async function(dataName){
    try {
        
        let sql = `SELECT * FROM vw_clinica_por_especialidade WHERE responsabilidade LIKE '%${dataName}%' order by id_clinica desc`
        let resultName = await prisma.$queryRawUnsafe(sql)
        
        if(resultName.length > 0){
            return resultName
        }else{
            return false
        }
        
    } catch (error) {
        console.log(error);
        return false
    }
}