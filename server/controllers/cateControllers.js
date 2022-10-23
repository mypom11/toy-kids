import { Category } from '../models/index.js';

export const addCategoryController = (req, res) => {
  const { mainCodeName, subCode, useYn } = req.body;
  const data = {
    mainCodeName,
    subCode,
    useYn,
  };

  const category = Category(data);

  category.save(err => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
};

export const getCategoryController = async (req, res) => {
  const { type } = req.query;
  console.log(type);
  if (type !== undefined) {
    Category.find({ mainCodeName: type, useYn: 'Y' }, (err, result) => {
      if (result.length === 0) {
        return res.json({
          result: false,
          message: '조회된 결과가 없습니다',
        });
      }
      return res.json(result);
    });
  } else {
    Category.find({ useYn: 'Y' }, (err, result) => {
      if (result.length === 0) {
        return res.json({
          result: false,
          message: '조회된 결과가 없습니다',
        });
      }
      return res.json(result);
    });
  }
};

export const delCategoryController = async (req, res) => {
  const { id } = req.body;
  Category.updateOne({ _id: id }, { $set: { useYn: 'N' } }, (err, result) =>
    res.json(result),
  );
};
