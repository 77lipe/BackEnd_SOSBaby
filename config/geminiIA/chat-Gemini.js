import dotenv from "dotenv"
import { GoogleGenerativeAI } from "@google/generative-ai"
import * as message from "../status/status.js"

dotenv.config()

const genIA = new GoogleGenerativeAI(process.env.API_KEY)
const model = genIA.getGenerativeModel({ model: "gemini-2.5-flash" })

const chatHistory = new Map()

export async function initChatMulti(userReq, contentType, userId) {
  try {
    if (String(contentType).toLowerCase() !== "application/json") {
      return message.ERROR_CONTENT_TYPE
    }

    const question = userReq?.question?.trim()
    if (!question) return message.ERROR_REQUIRED_FIELDS

    console.log("Pergunta Recebida:", question)

    // pega o histórico anterior
    const oldHistory = chatHistory.get(userId) || []

    // converte para o formato aceito pelo Gemini
    const formattedHistory = oldHistory.map((msg) => {
      if (msg.remetente === "user") {
        return { role: "user", parts: [{ text: msg.pergunta }] }
      } else if (msg.remetente === "IA") {
        return { role: "model", parts: [{ text: msg.resposta }] }
      }
      return null
    }).filter(Boolean)

    // cria a sessão de chat com o histórico formatado
    const chat = model.startChat({
      history: formattedHistory,
      generationConfig: { maxOutputTokens: 2048 },
    })

    const result = await chat.sendMessage(question)
    const answer = result.response.text()

    if (!answer) {
      return {
        message: message.ERROR_INVALID_QUESTION.message,
        status_code: message.ERROR_INVALID_QUESTION.status_code,
        response: result,
      }
    }

    // atualiza o histórico do usuário
    const updateHistory = [
      ...oldHistory,
      { remetente: "user", pergunta: question },
      { remetente: "IA", resposta: answer },
    ]

    chatHistory.set(userId, updateHistory)

    return {
      message: message.SUCCES_QUESTION_SENT.message,
      status_code: message.SUCCES_QUESTION_SENT.status_code,
      IA_response: answer,
      history: updateHistory,
    }
  } catch (error) {
    console.log(error)
    return message.ERROR_INVALID_QUESTION
  }
}