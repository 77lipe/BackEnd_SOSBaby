/***************************************************
 * 
 * Autor: Felipe Vieira
 * Data: 23/10/2025
 * Desc: Web Socket para o chat ficar "online" em tempo real
 * 
 **************************************************/

import { Server } from "socket.io";
import {postSQLMessage} from '../../model/MessageDAO/postSQLMessage.js'
import {getAllSQLChat} from '../../model/ChatDAO/getAllSQLChat.js'

export function chatSocketInit(server){
    const io = new Server(server,{
        cors: {
            origin: "*",
            methods: ["GET","POST"]
        }
    })

    console.log("Socket.IO iniciado");

    io.on("connection", (socket) => {
        console.log("Novo usuário conectado:", socket.id);

        socket.on("joinChat", (chatId) =>{
            socket.join(`chat_${chatId}`)
            console.log(`User ${socket.id} entrou no chat_${chatId}`);
        })

        socket.on("SendMessage", async (data) => {
            try {

                const result = await postSQLMessage(data)
                io.to(`chat_${data.id_chat}`).emit("receiveMessage", {
                    conteudo: data.conteudo,
                    id_user: data.id_user,
                    created_at: new Date()
                })

                console.log(`mensagem salva e emitida no chat ${data.id_chat}`);
            } catch (error) {
                console.log(error);
                socket.emit("Erro ao enviar mensagem")
            }
        })

        socket.on("disconnect", () => {
            console.log("User desconectado:", socket.id);
        })
    })
}