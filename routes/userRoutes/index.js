/*********************************************************
 * Autor: Felipe Vieira
 * Date:23/09/25
 * Versão: 1.0
 * Desc: App que irá controlar as DO USUARIO
 ********************************************************/

import PostUser from './PostUser.js'
import PutUser from './PutUser.js'
import GetIdUser from './GetIdUser.js'
import DeleteUser from './DeleteUser.js'
import LoginUser from './LoginUser.js'
import ForgetUserPass from './resetUserPassRoutes/forgetPass.js'
import ResetUserPass from  './resetUserPassRoutes/resetPass.js'
import { Router } from "express"

const router = Router()

router.use(PostUser)
router.use(GetIdUser)
router.use(PutUser)
router.use(DeleteUser)
router.use(LoginUser)
router.use(ForgetUserPass)
router.use(ResetUserPass)
export default router