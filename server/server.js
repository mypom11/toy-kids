import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import categoryRoutes from './routes/cateRoutes.js';
import noticeRoutes from './routes/noticeRoutes.js';

const __dirname = path.resolve();
dotenv.config();
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
// route 연결
app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/notice', noticeRoutes);

app.use(express.static(path.join(__dirname, 'public')));
app.use('/upload', express.static('upload'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// db연결
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('MongoDB connected...');
  })
  .catch(err => console.log(err));

// 서버 실행
app.listen(4000, () => {
  console.log('listening on 4000');
});
