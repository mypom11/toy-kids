import { Notice } from '../models/index.js';

export const addNoticeController = (req, res) => {
  const { title, detail } = req.body;

  const registDate = new Date();
  const data = {
    title,
    registDate,
    detail,
    useYn: 'Y',
  };

  const notice = Notice(data);

  notice.save(err => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
};

export const addNoticeImgController = (req, res) => {
  const imgFile = req.file;
  //   console.log(req);
  if (!imgFile) {
    return res.json({
      success: false,
      message: '파일 업로드에 실패했습니다.',
    });
  }
  return res.json(imgFile.path);
};

export const getNoticeController = (req, res) => {
  Notice.find((err, result) => {
    if (result.length === 0) {
      return res.json({
        success: false,
        message: '조회된 결과가 없습니다',
      });
    }
    return res.json(result);
  });
};

export const getNoticeDetail = (req, res) => {
  const { id } = req.query;
  Notice.findOne({ _id: id }, (err, result) => {
    if (result.length === 0) {
      return res.json({
        success: false,
        message: '조회된 결과가 없습니다',
      });
    }
    return res.json(result);
  });
};

export const setNoticeUse = (req, res) => {
  const { _id, useYn } = req.body;
  Notice.updateOne({ _id }, { $set: { useYn } }, (err, result) => {
    if (result.length === 0) {
      return res.json({
        success: false,
        message: '조회된 결과가 없습니다',
      });
    }
    return res.json(result);
  });
};
