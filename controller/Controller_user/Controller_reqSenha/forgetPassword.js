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

                    const shortCode = Math.floor(100000 + Math.random() * 900000).toString()
                    const token = jwt.sign(
                        { 
                          id_user: resultUser.id_user,
                          code: shortCode 
                        },
                        process.env.JWT_SECRET,
                        { expiresIn: '15min' }
                    )

                    console.log("Email:", process.env.SMTP_USER);
                    console.log("Senha:", process.env.SMTP_PASS ? "OK" : "MISSING");

                    const sendEmail = nodemailer.createTransport({
                        host: "smtp.gmail.com",
                        port: 465,
                        secure: true,
                        auth: {
                            user: process.env.SMTP_USER,
                            pass: process.env.SMTP_PASS
                        }
                    })

                    const mailHtml = `
                    <!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Redefinição de Senha - SOSBaby</title>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
<style>
  body {
    font-family: 'Poppins', Arial, sans-serif;
    background-color: #f0f4f8;
    margin: 0;
    padding: 0;
  }
  .container {
    max-width: 680px;
    margin: 40px auto;
    background: #ffffff;
    border-radius: 20px;
    box-shadow: 0 12px 25px rgba(0,0,0,0.1);
    overflow: hidden;
  }
  .header {
    background-color: #4a90e2;
    padding: 25px;
    text-align: center;
  }
  .header img {
    max-height: 80px;
  }
  .content {
    padding: 40px 30px;
    color: #333;
  }
  h2 {
    color: #4a90e2;
    text-align: center;
    font-weight: 600;
    margin-bottom: 25px;
  }
  p {
    font-size: 16px;
    line-height: 1.7;
    margin: 15px 0;
  }
  .token-button {
    display: block;
    text-align: center;
    background-color: #1e73be;
    color: #ffffff !important;
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
    padding: 15px;
    border-radius: 10px;
    margin: 25px auto;
    width: fit-content;
  }
  .token-button:hover {
    background-color: #155a8a;
  }
  .footer {
    background: #f1f5f9;
    text-align: center;
    padding: 18px;
    font-size: 13px;
    color: #555;
  }
  .highlight {
    color: #4a90e2;
    font-weight: 600;
  }
</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <!-- Espaço para logo -->
      <img src="https://via.placeholder.com/180x70?text=SOSBaby+Logo" alt="SOSBaby Logo">
    </div>
    <div class="content">
      <h2>🍼 Redefinição de Senha 🍼</h2>
      <p>Olá! 👋</p>
      <p>Você solicitou a redefinição da sua senha. 🔒</p>
      <p>Use o token abaixo para alterar sua senha (<span class="highlight">válido por 15 minutos ⏰</span>):</p>
      <p> ${shortCode} </p>
      <p>Se você não solicitou essa alteração, pode ignorar este e-mail sem problemas. ❌</p>
      <p>Um abraço,<br>Equipe SOSBaby 💙</p>
    </div>
    <div class="footer">
      © ${new Date().getFullYear()} SOSBaby. Todos os direitos reservados.
    </div>
  </div>
</body>
</html>
                    `

                    await sendEmail.sendMail({
                        from: `"SOSBABY" <${process.env.SMTP_USER}>`,
                        to: email,
                        subject: 'Redefinição de Senha',
                        html: mailHtml
                    })

                    return {
                      ...message.SUCCES_EMAIL_SENT,
                      code: shortCode,
                      token: token
                    }
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