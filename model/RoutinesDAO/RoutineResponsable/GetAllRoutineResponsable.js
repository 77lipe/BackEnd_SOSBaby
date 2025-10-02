/*********************************************************
 * Autor: Felipe Vieira
 * Date: 02/10/25
 * Versão: 1.0
 * Desc: App que irá realizar a comunicação com o banco
 *       dados para GET ALL DE ROTINA
 ********************************************************/
import {PrismaCliente} from '@prisma/client'
const prisma = new PrismaCliente()

export const getAllSQLRoutineResponsable = async function (){
    try {
        
        let sql = `SELECT * FROM tbl_rotina ORDER BY DESC`
        let resultSQL = await prisma.$queryRawUnsafe(sql)

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