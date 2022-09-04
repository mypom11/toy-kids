import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt  from 'jsonwebtoken';

const saltRounds = 10;

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    // email: {     type: String,     required: true,     unique: true,
    // trim:true, },
    password: {
        type: String,
        required: true
    },
    token:{
        type: String,
    }
})


userSchema.pre('save', function(next){
    const user = this;
    //db저장 전 비밀번호 암호화
    if(user.isModified('password')){
        bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err){
                return next(err)
            } 
    
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) {
                    return next(err)
                }
                user.password = hash
                next()
            })
        })
    }else{
        next()
    }
})


userSchema.methods.comparePassword = function(plainPassword, cb){
    //암호화된 비밀번호와 들어온 비밀번호가 같은지 체크

    bcrypt.compare(plainPassword, this.password, function(err, isMatched){
        if(err){
            return cb(err)
        }
        cb(null, isMatched)
    })
}

userSchema.methods.generateToken = function(cb){
    //jwt 토큰 생성
    const user = this

    const token = jwt.sign(user._id.toHexString(), 'secretToken');

    user.token = token
    user.save(function(err, user){
        if(err){
            return cb(err)
        }else{
            cb(null, user)
        }
    })
}

const User = mongoose.model('User', userSchema);

export default User