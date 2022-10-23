import { Router } from 'express';
import { noticeUpload } from '../modules/multer.js';
import {
  addNoticeController,
  getNoticeController,
  addNoticeImgController,
  getNoticeDetail,
  setNoticeUse,
} from '../controllers/noticeControllers.js';

const router = Router();

router.get('/find', getNoticeController);
router.get('/detail', getNoticeDetail);
router.post(
  '/addNoticeImg',
  noticeUpload.single('imgFile'),
  addNoticeImgController,
);

router.post('/add', addNoticeController);
router.post('/useYn', setNoticeUse);
export default router;
