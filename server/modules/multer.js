import multer from 'multer';
import path from 'path';

const fileFilter = (req, file, cb) => {
  // 확장자 필터링
  console.log('test');
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true); // 해당 mimetype만 받겠다는 의미
  } else {
    // 다른 mimetype은 저장되지 않음
    req.fileValidationError = 'jpg,jpeg,png,gif,webp 파일만 업로드 가능합니다.';
    cb(null, false);
  }
};

export const detailUpload = multer({
  storage: multer.diskStorage({
    // 폴더위치 지정
    destination: (req, file, done) => {
      done(null, './upload/productDetail');
    },
    filename: (req, file, done) => {
      const ext = path.extname(file.originalname);
      // aaa.txt => aaa+&&+129371271654.txt
      const fileName = `productDetail${Date.now()}${ext}`;
      done(null, fileName);
    },
  }),
  fileFilter,
});

export const thumbnailUpload = multer({
  storage: multer.diskStorage({
    // 폴더위치 지정
    destination: (req, file, done) => {
      done(null, './upload/thumbnail');
    },
    filename: (req, file, done) => {
      const ext = path.extname(file.originalname);
      // aaa.txt => aaa+&&+129371271654.txt
      const fileName = `thumbnail${Date.now()}${ext}`;
      done(null, fileName);
    },
  }),
  fileFilter,
});

export const noticeUpload = multer({
  storage: multer.diskStorage({
    // 폴더위치 지정
    destination: (req, file, done) => {
      done(null, './upload/notice');
    },
    filename: (req, file, done) => {
      const ext = path.extname(file.originalname);
      // aaa.txt => aaa+&&+129371271654.txt
      const fileName = `notice${Date.now()}${ext}`;
      done(null, fileName);
    },
  }),
  fileFilter,
});
