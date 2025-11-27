
import {Router} from "express"
import cors from 'cors'
const routerIdResponsable = Router()

import {IdRespByUser} from "../../controller/Controller_responsable/GetRespByUser.js";

routerIdResponsable.get('/respByUser/:id', cors(), async (req, res) => {

    let id = req.params.id
    let resultIdResponsable = await IdRespByUser(id)

    return res.status(resultIdResponsable.status_code).json(resultIdResponsable)
})

export default routerIdResponsable