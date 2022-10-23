import { Router } from 'express';
import { detailUpload, thumbnailUpload } from '../modules/multer.js';
import {
  addProductController,
  getProductController,
  addDetailImgController,
  getProductDetail,
} from '../controllers/productControllers.js';

const router = Router();

router.get('/find', getProductController);
router.get('/detail', getProductDetail);
router.post(
  '/addDetailImg',
  detailUpload.single('imgFile'),
  addDetailImgController,
);

router.post('/add', thumbnailUpload.single('imgFile'), addProductController);

export default router;
