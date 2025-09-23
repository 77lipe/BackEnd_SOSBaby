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

//Import das bibliotecas para configurar a API 
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

//Manipular o body da quisição para chegar apenas JSON
const bodyParserJSON = bodyParser.json()

//Import das controllers

//SANGUE
import { insertSangue } from "./controller/Controller_sangue/insertSangue.js"
import { SelectAllBlood } from "./controller/Controller_sangue/selectAllSangue.js"
import { SelectIdBlood } from "./controller/Controller_sangue/selectIDSangue.js"
import { DeleteBlood } from "./controller/Controller_sangue/deleteSangue.js"

//SEXO
import { insertSex } from "./controller/Controller_sexo/insertSex.js"
import { SelectAllGender } from "./controller/Controller_sexo/LisAllGender.js"
import { SearchIDGender } from "./controller/Controller_sexo/SelectByIdGender.js"
import { DeleteGender } from "./controller/Controller_sexo/DeleteGender.js"

//TYPE-USER 
import { insertTypeUser } from "./controller/Controller_type_user/insertTypeUser.js"
import { SelectAllUsers } from "./controller/Controller_type_user/SelectAllUsers.js"
import { searchIDTypeUser } from "./controller/Controller_type_user//searchIdType.js"
import { DeleteTypeUser } from "./controller/Controller_type_user/DeleteTypeUser.js"
import { UpdateTypeUser } from "./controller/Controller_type_user/putTypeUser.js"

//USER
import { insertUser } from "./controller/Controller_user/insertUser.js"
import { selectIDUser } from "./controller/Controller_user/searchIdUser.js"
import { deleteUser } from "./controller/Controller_user/DeleteUser.js"
import { updateUser } from "./controller/Controller_user/putUser.js"
import { loginUser } from "./controller/Controller_user/loginUser.js"

//RESPONSABLE
import { insertResp } from "./controller/Controller_responsable/InsertResp.js"
import { ListAllResp } from "./controller/Controller_responsable/ListAllResp.js"
import { searchIDResp } from "./controller/Controller_responsable/GetIdResp.js"
import { UpdateResp } from "./controller/Controller_responsable/UpdateResp.js"
import { DeleteResp } from "./controller/Controller_responsable/DeleteResp.js";

//BABY
import { insertBaby } from "./controller/Controller_baby/insertBebe.js"
import { ListAllBaby } from "./controller/Controller_baby/selectAllBebe.js"
import { searchIDBaby } from "./controller/Controller_baby/SelectIdBebe.js"
import { UpdateBaby } from "./controller/Controller_baby/updateBebe.js"
import { DeleteBaby } from "./controller/Controller_baby/deleteBebe.js"


//Cria o objeto app com referencias do express para criar a API 
const app = express()

app.use((request, response, next)=>{
    response.header('Acces-Control-Allow-Origin', '*')
    response.header('Acces-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    app.use(cors())
   next()
})

/************************************************ SANGUE *************************************************************/

app.post('/v1/sangue', cors(), bodyParserJSON, async function(request, response){

      //Recebe o content type da requisição
    let contentType = request.headers['content-type']

    //Recebe do body da requisição os dados encaminhados
    let dadosBody = request.body
    let resultSangue = await insertSangue(dadosBody,contentType)

    response.status(resultSangue.status_code)
    response.json(resultSangue)
})

app.get('/v1/sangue', cors(), async function(request, response){

  let resultAllBlood = await SelectAllBlood()

  response.status(resultAllBlood.status_code)
  response.json(resultAllBlood)
})

app.get('/v1/sangue/:id', cors(), async function(request, response){

  let idBlood = request.params.id
  let resultIdBlood = await SelectIdBlood(idBlood)

  response.status(resultIdBlood.status_code)
  response.json(resultIdBlood)
})

app.delete('/v1/sangue/:id', cors(), async function(request, response){

  let idBlood = request.params.id
  let resultDeleteBlood = await DeleteBlood(idBlood)  

  response.status(resultDeleteBlood.status_code)
  response.json(resultDeleteBlood)
})  

/************************************************ SEXO *************************************************************/


app.post('/v1/sexo', cors(), bodyParserJSON, async function (request, response){

    let contentType = request.headers['content-type']

    //Recebe do body da requisição os dados encaminhados
    let dadosBody = request.body
    let resultReqSex = await insertSex(dadosBody,contentType)

    response.status(resultReqSex.status_code)
    response.json(resultReqSex)
})

app.get('/v1/sexo', cors(), async function(request, response){

  let resultAllGender = await SelectAllGender() 

  response.status(resultAllGender.status_code)
  response.json(resultAllGender)
})

app.get('/v1/sexo/:id', cors(), async function(request, response){

  let idGender = request.params.id
  let resultIdGender = await SearchIDGender(idGender)

  response.status(resultIdGender.status_code)
  response.json(resultIdGender)
})

app.delete('/v1/sexo/:id', cors(), async function(request, response){
  
  let idGender = request.params.id
  let resultDeleteGender = await DeleteGender(idGender)

  response.status(resultDeleteGender.status_code)
  response.json(resultDeleteGender)
})  

/************************************************ USER *************************************************************/

// USER
app.post('/v1/user', cors(), bodyParserJSON, async function (request, response){

  let contentType = request.headers['content-type']

 
  let dadosBody = request.body
  let resultUser = await insertUser(dadosBody,contentType)

  response.status(resultUser.status_code)
  response.json(resultUser)
})

app.get('/v1/user', cors(), async function(request, response){

  let resultAllUser = await SelectAllUsers()
  
  response.status(resultAllUser.status_code)
  response.json(resultAllUser)
})  

app.get('/v1/user/:id', cors(), async function(request, response){

  let idUser = request.params.id
  let resultIdUser = await selectIDUser(idUser)

  response.status(resultIdUser.status_code)
  response.json(resultIdUser)
})

app.delete('/v1/user/:id', cors(), async function(request, response){ 
  
  let idUser = request.params.id
  let resultDeleteUser = await deleteUser(idUser)

  response.status(resultDeleteUser.status_code)
  response.json(resultDeleteUser)
})

app.put('/v1/user/:id', cors(), bodyParserJSON, async function(request, response){

  let idUser = request.params.id
  let contentType = request.headers['content-type']
  let dadosBody = request.body

  let resultUpdateUser = await updateUser(dadosBody, idUser, contentType)

  response.status(resultUpdateUser.status_code)
  response.json(resultUpdateUser)
})

app.post('/v1/user/login', cors(), bodyParserJSON, async function(request, response){

  let contentType = request.headers['content-type']
  let dadosBody = request.body

  let resultLoginUser = await loginUser(dadosBody, contentType)

  response.status(resultLoginUser.status_code)
  response.json(resultLoginUser)
})



// TYPE-USER
app.post('/v1/typeUser', cors(), bodyParserJSON, async function (request, response){

    let contentType = request.headers['content-type']

  //Recebe do body da requisição os dados encaminhados
  let dadosBody = request.body
  let resultUser = await insertTypeUser(dadosBody,contentType)

  response.status(resultUser.status_code)
  response.json(resultUser)
})

app.get('/v1/typeUser', cors(), async function(request, response){

  let resultAllTypeUser = await SelectAllUsers()

  response.status(resultAllTypeUser.status_code)
  response.json(resultAllTypeUser)
})  

app.get('/v1/typeUser/:id', cors(), async function(request, response){
  
  let idTypeUser = request.params.id
  let resultIdTypeUser = await searchIDTypeUser(idTypeUser)

  response.status(resultIdTypeUser.status_code)
  response.json(resultIdTypeUser)
})

app.delete('/v1/typeUser/:id', cors(), async function(request, response){
  
  let idTypeUser = request.params.id
  let resultDeleteTypeUser = await DeleteTypeUser(idTypeUser)   

  response.status(resultDeleteTypeUser.status_code)
  response.json(resultDeleteTypeUser)
})

app.put('/v1/typeUser/:id', cors(), bodyParserJSON, async function(request, response){  

  let idTypeUser = request.params.id
  let contentType = request.headers['content-type']
  let dadosBody = request.body

  let resultUpdateTypeUser = await UpdateTypeUser(dadosBody, idTypeUser, contentType)

  response.status(resultUpdateTypeUser.status_code)
  response.json(resultUpdateTypeUser)
})


// RESPONSABLE
app.post('/v1/responsable', cors(), bodyParserJSON, async function (request, response){

    let contentType = request.headers['content-type']

  //Recebe do body da requisição os dados encaminhados
  let dadosBody = request.body
  let resultUser = await insertResp(dadosBody,contentType)

  response.status(resultUser.status_code)
  response.json(resultUser)
})

app.get('/v1/responsable', cors(), async function(request, response){
  
  let resultAllResp = await ListAllResp()
  
  response.status(resultAllResp.status_code)
  response.json(resultAllResp)
})

app.get('/v1/responsable/:id', cors(), async function(request, response){

  let idResp = request.params.id
  let resultIdResp = await searchIDResp(idResp)   

  response.status(resultIdResp.status_code)
  response.json(resultIdResp)
})

app.put('/v1/responsable/:id', cors(), bodyParserJSON, async function(request, response){

  let idResp = request.params.id
  let contentType = request.headers['content-type']
  let dadosBody = request.body

  let resultUpdateResp = await UpdateResp(dadosBody, idResp, contentType)
  
  response.status(resultUpdateResp.status_code)
  response.json(resultUpdateResp)
})

app.delete('/v1/responsable/:id', cors(), async function(request, response){

  let idResp = request.params.id
  let resultDeleteResp = await DeleteResp(idResp)

  response.status(resultDeleteResp.status_code)
  response.json(resultDeleteResp)
})


app.listen('3030', function(){
    console.log('API funcionando e aguardando requisições...')
})