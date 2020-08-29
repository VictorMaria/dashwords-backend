import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connectDb from './database/db';

const app = express();
connectDb();

app.use(cors());
app.use(morgan('dev'));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use('*', (req, res) =>
  res.status(404).json({
    message: 'Not Found. Use /api/v1 to access the API',
  }),
);

export default app;