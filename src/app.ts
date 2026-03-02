// app.ts
import express from 'express';
import path from 'path';
import routes from './routes';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(routes);

export default app;
