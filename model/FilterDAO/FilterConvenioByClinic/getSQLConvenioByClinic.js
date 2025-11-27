import pkg from "@prisma/client"
const { PrismaClient } = pkg

const prisma = new PrismaClient()

export const FilterConvenioByClinic = async function(dataName){
    try {
        
        let sql = `SELECT * FROM vw_clinica_por_convenio WHERE nome_convneio LIKE '%${dataName}%' order by id_clinica desc`
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