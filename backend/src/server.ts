import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API PCM está funcionando!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
