/**************************************************
 * Autor: Isabelly Lima
 * Date: 23/10/25
 * Versão: 1.0
 * Desc: App que irá chamar a clínica por ID
 **************************************************/

import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export const idClinica = async function (id) {
    try {

        let sql = `SELECT * FROM tbl_clinica WHERE id_clinica = ${id}`
        let resultClinica = await prisma.$queryRawUnsafe(sql)

        if (resultClinica.length > 0) {
            return resultClinica
        }else{
            return false
        }


    } catch (error) {
        console.log(error)
        return false;
    }
    
}