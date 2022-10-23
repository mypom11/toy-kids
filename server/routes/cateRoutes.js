import { Router } from 'express';
import {
  getCategoryController,
  addCategoryController,
  delCategoryController,
} from '../controllers/cateControllers.js';

const router = Router();

router.get('/find', getCategoryController);
router.post('/add', addCategoryController);
router.post('/del', delCategoryController);

export default router;
