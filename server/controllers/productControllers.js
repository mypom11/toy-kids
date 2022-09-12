import { Product } from '../models/index.js';

export const addProductController = (req, res) => {
  const { name, gerne, ages, detail } = req.body;
  const registDate = new Date();
  const data = {
    name,
    gerne,
    ages,
    detail,
    registDate,
    thumbnail: req.file.path,
  };

  const product = Product(data);

  product.save(err => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
};

export const addDetailImgController = (req, res) => {
  const imgFile = req.file;
  if (!imgFile) {
    return res.json({
      success: false,
      message: '파일 업로드에 실패했습니다.',
    });
  }
  return res.json(imgFile.path);
};

export const getProductController = (req, res) => {
  Product.find((err, result) => {
    console.log(result);
    if (result.length === 0) {
      return res.json({
        loginSuccess: false,
        message: '조회된 결과가 없습니다',
      });
    }
    return res.json(result);
  });
};
