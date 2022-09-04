import dotenv from 'dotenv'
import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';
import bodyParser from 'body-parser';

dotenv.config();
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());


//route 연결
app.use('/api/admin', userRoutes);

//db연결
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('MongoDB connected...')
    })
    .catch(err => console.log(err));

//서버 실행
app.listen(4000, function () {
    console.log('listening on 4000');
})