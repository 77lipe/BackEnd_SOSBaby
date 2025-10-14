/*********************************************************
 * Autor: Felipe Vieira
 * Date: 16/09/25
 * Versão: 1.0
 * Desc: App que irá realizar as 
 *       validações e solicitar a troca de senha
 ********************************************************/

import * as message from '../../../config/status/status.js'
import { findUserEmail } from '../../../model/UserDAO/recuperarSenhaDAO/GetRecoveryUser.js'

import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

dotenv.config()

export const forgotPassword = async function(email, contentType){
    try {
        
        if(String(contentType).toLocaleLowerCase() === 'application/json'){
            if (
                email == "" || email == undefined || email == null || email.length > 100
            ) {
                return message.ERROR_REQUIRED_FIELDS
            }else{

                let resultUser = await findUserEmail(email)
                if(resultUser){
                    console.log(resultUser.id_user);
                    const token = jwt.sign(
                        {id_user: resultUser.id_user},
                        process.env.JWT_SECRET,
                        {expiresIn: '15min'}
                    )
                    
                    const link = `${process.env.FRONTEND_URL}/reset-password?token=${token}`
                    
                    console.log("Email:", process.env.EMAIL_USER);
                    console.log("Senha:", process.env.EMAIL_PASS ? "OK" : "MISSING");

                    const sendEmail = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: process.env.EMAIL_USER,
                            pass: process.env.EMAIL_PASS
                        }
                    })

                    await sendEmail.sendMail({
                        from: `"SOSBABY" <${process.env.EMAIL_USER}>`,
                        to: email,
                        subject: 'Redefinição de Senha',
                        text: `Olá, clique no link abaixo para redefinir sua senha:\n\n${link}\n\nEsse link será expirado em 15 minutos.\n\n seu token para alteração é ${token} `
                    })

                    return message.SUCCES_EMAIL_SENT
                }else{
                    return message.ERROR_NOT_FOUND
                }
            }
        }else{
            return message.ERROR_CONTENT_TYPE
        }
    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}