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

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Spell something magical with DASHWORDS' });
});

export default app;
