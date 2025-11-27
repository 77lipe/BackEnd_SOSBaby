
import pkg from "@prisma/client"
const { PrismaClient } = pkg

const prisma = new PrismaClient()

export const FilterSpecialtyByDoctor = async function(dataName){
    try {
        
        let sql = `SELECT * FROM vw_medico_por_especialidade WHERE responsabilidade LIKE '%${dataName}%' order by id_medico desc`
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