import { Router } from "express"
import bodyParser from "body-parser"
import { initChatMulti } from "../../config/geminiIA/chat-Gemini.js"
import { authAccess } from "../../config/middleware/authAcces.js"

const routerChatIA = Router()
routerChatIA.use(bodyParser.json())

routerChatIA.post("/ia/generate/chat", authAccess("Responsável"), async (req, res) => {
    try {
        const contentType = req.headers["content-type"]
        const userId = req.user?.id_user
        console.log(userId);
        const resultReqUser = await initChatMulti(req.body, contentType, userId)

        return res.status(resultReqUser.status_code).json(resultReqUser)
    } catch (error) {
        console.log(error)
    }
})

export default routerChatIA
