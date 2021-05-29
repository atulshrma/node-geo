import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from 'dotenv';
import connect from './models';

dotenv.config();
connect(process.env.MONGO_DB_URL);

import indexRouter from './routes/index';
import outletsRouter from './routes/outlets';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/outlets', outletsRouter);

export default app;
