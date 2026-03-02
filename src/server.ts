// server.ts
import 'dotenv/config';
import app from './app';
import { connectMongo } from './shared/database/mongo';

const PORT = process.env.PORT || 3000;

connectMongo().then(() => {
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
});
