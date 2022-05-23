import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './src/routes';
const app = express();
const APP_PORT = process.env.APP_PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));

// Routes
app.use('/api/v1', routes);
// Server start
app.listen(APP_PORT, () => {
  console.info(`App running on port ${APP_PORT}`);
});
