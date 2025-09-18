/**************************************************
 * Autor: Felipe Vieira
 * Date: 16/09/25
 * Versão: 1.0
 * Desc: App que irá conter as rotas e end-points
 **************************************************/

//Import das bibliotecas para configurar a API 
const express       = require('express')
const cors          = require('cors')
const bodyParser    = require('body-parser')

//Manipular o body da quisição para chegar apenas JSON
const bodyParserJSON = bodyParser.json()

//Import das controllers
import { insertSex } from "./controller/Controller_sexo/insertGender"
import { insertUser } from "./controller/Controller_user/insertUser"
import { insertTypeUser } from "./controller/Controller_type_user/insertTypeUser"
import { insertResp } from "./controller/Controller_responsable/InsertResp"
import {  } from "module"

//Cria o objeto app com referencias do express para criar a API 
const app = express()

app.use((request, response, next)=>{
    response.header('Acces-Control-Allow-Origin', '*')
    response.header('Acces-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    app.use(cors())
   next()
})

/************************************************ SANGUE *************************************************************/

app.get('/v1/controle-baby/sangue', cors(), bodyParserJSON, async function(request, response){

      //Recebe o content type da requisição
    let contentType = request.headers['content-type']

    //Recebe do body da requisição os dados encaminhados
    let dadosBody = request.body
    let resultSangue = await controllerSangue.insertSangue(dadosBody,contentType)

    response.status(resultSangue.status_code)
    response.json(resultSangue)
})

/************************************************ SEXO *************************************************************/

//Inserir
app.post('/v1/sexo', cors(), bodyParserJSON, async function (request, response){

    let contentType = request.headers['content-type']

    //Recebe do body da requisição os dados encaminhados
    let dadosBody = request.body
    let resultSexo = await insertSex(dadosBody,contentType)

    response.status(resultReqSex.status_code)
    response.json(resultReqSex)
})

//Listar Todos
app.get('/v1/controle-sexo/sexo', cors(), bodyParserJSON, async function (request, response){

    let resultSexo = await controllerSexo.listarSexo()

    response.status(resultSexo.status_code)
    response.json(resultSexo)
})

app.delete('v1/controle-sexo/sexo:id', cors(), bodyParserJSON, async function (request, response){
    
    let id = request.params.id

    let resultSexo = await controllerSexo.DeletSex(id)

    response.status(resultSexo.status_code)
    response.json(resultSexo)
})

/************************************************ USER *************************************************************/

//Inserir
app.post('/v1/user', cors(), bodyParserJSON, async function (request, response){

      let contentType = request.headers['content-type']

    //Recebe do body da requisição os dados encaminhados
    let dadosBody = request.body
    let resultUser = await insertUser(dadosBody,contentType)

    response.status(resultUser.status_code)
    response.json(resultUser)
})

//Listar Todos
app.get('/v1/user', cors(), bodyParserJSON, async function (request, response){

    let resultUser = await controllerUser.listAllUsers()

    response.status(resultUser.status_code)
    response.json(resultUser)
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



//RESPONSABLE
app.post('/v1/responsable', cors(), bodyParserJSON, async function (request, response){

    let contentType = request.headers['content-type']

  //Recebe do body da requisição os dados encaminhados
  let dadosBody = request.body
  let resultUser = await insertTypeUser(dadosBody,contentType)

  response.status(resultUser.status_code)
  response.json(resultUser)
})