import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/calculate', (req, res) => {
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

  res.json({ result });
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
