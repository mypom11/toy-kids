import { User } from '../models/index.js';

export const userSignUpController = (req, res) => {
  const user = User(req.body);

  user.save(err => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
};

export const userLoginController = (req, res) => {
  User.findOne(
    {
      name: req.body.name,
    },
    (err, user) => {
      if (!user) {
        return res.json({
          loginSuccess: false,
          message: '존재하지 않는 아이디입니다.',
        });
      }
      user.comparePassword(req.body.password, (err, isMatched) => {
        if (!isMatched) {
          return res.json({
            loginSuccess: false,
            message: '비밀번호가 일치하지 않습니다.',
          });
        }
        user.generateToken((err, user) => {
          if (err) {
            return res.status(400).send(err);
          }
          return res
            .cookie('x_auth', user.token)
            .status(200)
            .json({ loginSuccess: true, userId: user._id });
        });
      });
    },
  );
};

export const userAuth = (req, res) => {
  res.status(200).json({
    id: req.user._id,
    name: req.user.name,
  });
};

export const userLogout = (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: '' }, err => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.status(200).send({
      success: true,
    });
  });
};
