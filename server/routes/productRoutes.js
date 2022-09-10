import { Router } from 'express';
import {
  addProductController,
  getProductController,
} from '../controllers/productControllers.js';

const router = Router();

router.post('/add', addProductController);
router.get('/find', getProductController);

export default router;
