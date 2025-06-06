import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.post('/calculate', async (req, res) => {
  const { num1, num2, operator } = req.body;
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num2 !== 0 ? num1 / num2 : 'Erro: divisão por zero';
      break;
    default:
      result = 'Operador inválido';
  }

  const expression = `${num1} ${operator} ${num2}`;

  await prisma.calculation.create({
    data: {
      expression,
      result: result.toString(),
    },
  });


  res.json({ result });
});

app.get('/history', async (req, res) => {
  const history = await prisma.calculation.findMany({
    orderBy: { createdAt: 'desc' },
    take: 10
  });
  res.json(history);
});


app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
