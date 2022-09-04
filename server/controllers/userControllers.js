import {User} from "../models/index.js"
import cookieParser from "cookie-parser"

export const userSignUpController = (req, res) => {
    const user = User(req.body)

    user.save((err, doc) => {
        if (err) 
            return res.json({success: false, err})
        return res
            .status(200)
            .json({success: true})
    })
}

export const userLoginController = (req, res) => {
    User.findOne({
        name: req.body.name
    }, (err, user) => {
        if (!user) {
            return res.json({loginSuccess: false, message: '존재하지 않는 아이디입니다.'})
        }
        user.comparePassword(req.body.password, (err, isMatched) => {
            if (!isMatched) {
                return res.json({loginSuccess: false, message: '비밀번호가 일치하지 않습니다.'})
            }
        })
        user.generateToken((err, user) => {
            if (err) {
                return res
                    .status(400)
                    .send(err)
            }
            res
                .cookie('x-auth', user.token)
                .status(200)
                .json({loginSuccess: true, userId: user._id})
        })
    })
}