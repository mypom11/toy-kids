import { Router } from 'express';
import { auth } from '../middleware/auth.js';
import {
  userSignUpController,
  userLoginController,
  userAuth,
  userLogout,
} from '../controllers/userControllers.js';

const router = Router();

router.post('/signup', userSignUpController);
router.post('/login', userLoginController);
router.get('/logout', auth, userLogout);

router.get('/auth', auth, userAuth);

export default router;
