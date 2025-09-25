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
 **************************************************/


import express from 'express'
import cors from 'cors'

import babyRoutes from './routes/babyRoutes/index.js'
import userRoutes from './routes/userRoutes/index.js'
import responsableRoutes from './routes/ResponsableRoutes/index.js'
import sexRoutes from './routes/SexRoutes/index.js'
import bloodRoutes from './routes/BloodRoutes/index.js'
import typeUserRoutes from './routes/TypeUserRoutes/index.js'


const app = express()
app.use(cors())
app.use(express.json())


app.use('/v1/sosbaby', babyRoutes)
app.use('/v1/sosbaby', userRoutes)
app.use('/v1/sosbaby', responsableRoutes)
app.use('/v1/sosbaby', sexRoutes)
app.use('/v1/sosbaby', bloodRoutes)
app.use('/v1/sosbaby', typeUserRoutes)


app.listen('3030', function(){
    console.log('API funcionando e aguardando requisições...')
})