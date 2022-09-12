import { Router } from 'express';
import { detailUpload, thumbnailUpload } from '../modules/multer.js';
import {
  addProductController,
  getProductController,
  addDetailImgController,
} from '../controllers/productControllers.js';

const router = Router();

router.post('/add', thumbnailUpload.single('thumbnail'), addProductController);
router.get('/find', getProductController);
router.post(
  '/addDetailImg',
  detailUpload.single('imgFile'),
  addDetailImgController,
);

export default router;
