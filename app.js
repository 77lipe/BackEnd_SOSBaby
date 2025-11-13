/**************************************************
 * Autor: Felipe Vieira
 * Date: 16/09/25
 * Versão: 1.0
 * Desc: App que irá conter as rotas e end-points
 * 
 * Instalações necessárias:
 *     Para criar a API precisamos instalar:
 *          * express           npm install express --save
 *          * cors              npm install cors --save
 *          * body-parser       npm install body-parser --save
 *
 *      Para criar a integração com o Banco de Dados precisamos instalar:
 *          * prisma            npm install prisma --save           (para fazer conexão com o BD)
 *          * prisma/client     npm install @prisma/client --save   (para rodar os scripts SQL)
 *        
 * 
 *            Após a instalação do prisma e do prisma client, devemos:
 *              npx prisma init
 *            Você deverá configurar o arquivo .env e schema.prisma com as credenciais do BD
 *            Após essa configuração deverá rodar o seguinte comando:
 *               npx prisma migrate dev
 * 
 *              npm install jsonwebtoken bcryptjs nodemailer dotenv socket.io @google/generative-ai twilio

 * 
 **************************************************/

import dotenv from 'dotenv'

// Carrega o .env correto conforme o ambiente
dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env'
})


async function testDBConnection() {
    try {
      await prisma.$queryRaw`SELECT 1+1 AS result`;
      console.log('✅ Conexão com o banco OK!');
    } catch (err) {
      console.error('❌ Erro na conexão com o banco:', err);
    }
  }
  
  testDBConnection();

import express from 'express'
import cors from 'cors'
import http from 'http'
import nodemailer from 'nodemailer'

import babyRoutes from './routes/babyRoutes/index.js'
import userRoutes from './routes/userRoutes/index.js'
import responsableRoutes from './routes/ResponsableRoutes/index.js'
import sexRoutes from './routes/SexRoutes/index.js'
import bloodRoutes from './routes/BloodRoutes/index.js'
import typeUserRoutes from './routes/TypeUserRoutes/index.js'
import doctorRoutes from './routes/doctorRoutes/index.js'
import itemRoutineRoutes from './routes/routinesRoutes/routineItemRoutes/index.js'
import routineRoutes from './routes/routinesRoutes/routineRespRoutes/index.js'
import calenderRoutes from './routes/calendarioRoutes/index.js'
import tipsRoutes from './routes/tipRoutes/index.js'
import categoryRoutes from './routes/categorysRoutes/categoryRoutes/index.js'
import subcategorysRoutes from './routes/categorysRoutes/subCategoryRoutes/index.js'
import tipSubcategoryRoutes from './routes/tipRoutes/TipSubRoutes/index.js'
import chatRoutes from './routes/chatRoutes/index.js'
import messageRoutes from './routes/messageRoutes/index.js'
import ChatMessageRoutes from './routes/chatRoutes/chatMessageRoutes/index.js'
import clinicaRoutes from './routes/clinicaRoutes/index.js'
import chatIARoutes from './routes/IAchatRoutes/index.js'
import relatorioRoutes from './routes/relatorioRoutes/index.js'
import TokenCallSolicited from './routes/videoCallRoutes/index.js'

import { chatSocketInit } from "./config/chatSocket/index.js";


const app = express()
app.use(cors())
app.use(express.json())

// Parte dedicada ao Chat em tempo real:
const server = http.createServer(app)
chatSocketInit(server)


app.use('/v1/sosbaby', babyRoutes)
app.use('/v1/sosbaby', userRoutes)
app.use('/v1/sosbaby', responsableRoutes)
app.use('/v1/sosbaby', sexRoutes)
app.use('/v1/sosbaby', bloodRoutes)
app.use('/v1/sosbaby', typeUserRoutes)
app.use('/v1/sosbaby', doctorRoutes)
app.use('/v1/sosbaby', itemRoutineRoutes)
app.use('/v1/sosbaby', routineRoutes)
app.use('/v1/sosbaby', calenderRoutes)
app.use('/v1/sosbaby', tipsRoutes)
app.use('/v1/sosbaby', categoryRoutes)
app.use('/v1/sosbaby', subcategorysRoutes)
app.use('/v1/sosbaby', tipSubcategoryRoutes)
app.use('/v1/sosbaby', chatRoutes)
app.use('/v1/sosbaby', messageRoutes)
app.use('/v1/sosbaby', ChatMessageRoutes)
app.use('/v1/sosbaby', clinicaRoutes)
app.use('/v1/sosbaby', chatIARoutes)
app.use('/v1/sosbaby', relatorioRoutes)
app.use('/v1/sosbaby', TokenCallSolicited)

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`✅ API funcionando e aguardando requisições na porta ${PORT}...`);
});
