import {Router} from "express";
import {userSignUpController, userLoginController} from '../controllers/userControllers.js'

const router = Router()

router.post('/signup', userSignUpController)
router.post('/login', userLoginController)

export default router