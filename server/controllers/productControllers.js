import { Product } from '../models/index.js';

export const addProductController = (req, res) => {
  const product = Product(req.body);

  product.save(err => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
};

export const getProductController = (req, res) => {
  //   const { name, gerne, ages } = req.body;

  Product.find(
    // {
    //   $or: [
    //     {
    //       name,
    //       gerne,
    //       ages,
    //     },
    //   ],
    // },
    (err, result) => {
      console.log(result);
      if (result.length === 0) {
        return res.json({
          loginSuccess: false,
          message: '조회된 결과가 없습니다',
        });
      }
      return res.json(result);
    },
  );
};
