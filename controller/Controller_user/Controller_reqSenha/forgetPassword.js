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

export const forgotPassword = async function (email, contentType) {
    try {

        if (String(contentType).toLocaleLowerCase() === 'application/json') {
            if (
                email == "" || email == undefined || email == null || email.length > 100
            ) {
                return message.ERROR_REQUIRED_FIELDS
            } else {

                let resultUser = await findUserEmail(email)
                if (resultUser) {
                    console.log(resultUser.id_user);
                    const token = jwt.sign(
                        { id_user: resultUser.id_user },
                        process.env.JWT_SECRET,
                        { expiresIn: '15min' }
                    )

                    const link = `${process.env.FRONTEND_URL}/reset-password?token=${token}`

                    console.log("Email:", process.env.SMTP_USER);
                    console.log("Senha:", process.env.SMTP_PASS ? "OK" : "MISSING");

                    const sendEmail = nodemailer.createTransport({
                        host: "smtp.gmail.com",
                        port: 465,
                        secure: true, // SSL
                        auth: {
                            user: process.env.SMTP_USER,
                            pass: process.env.SMTP_PASS
                        }
                    })

                    const mailHtml = `
<div style="font-family: Arial, sans-serif; line-height:1.6; color:#333;">
  <h2>🍼 SOSBaby 🍼</h2>
  <p>Olá! 👋</p>
  <p>Você solicitou a redefinição da sua senha. 🔒</p>
  <p>Copie o token abaixo para alterar sua senha (válido por 15 minutos ⏰):</p>
  <p style="background:#edf2f7; padding:10px; border-radius:8px; text-align:center;">
    <a href="#" style="color: #1e90ff; font-weight:bold; font-size:16px; text-decoration:none;"
       onclick="navigator.clipboard.writeText('${token}')">
       ${token} 
    </a>
  </p>
  <p>Se você não solicitou essa alteração, pode ignorar este e-mail sem problemas. ❌</p>
  <p>Um abraço,<br>Equipe SOSBaby 💙</p>
</div>
`;

                    await sendEmail.sendMail({
                        from: `"SOSBABY" <${process.env.SMTP_USER}>`,
                        to: email,
                        subject: 'Redefinição de Senha',
                        html: mailHtml
                    })

                    return message.SUCCES_EMAIL_SENT
                } else {
                    return message.ERROR_NOT_FOUND
                }
            }
        } else {
            return message.ERROR_CONTENT_TYPE
        }
    } catch (error) {
        console.log(error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}