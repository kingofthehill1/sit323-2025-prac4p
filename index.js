const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/add', (req, res) => {
  const { num1, num2 } = req.query;
  if (isNaN(num1) || isNaN(num2)) return res.status(400).send('Invalid numbers');
  res.send({ result: Number(num1) + Number(num2) });
});

app.get('/subtract', (req, res) => {
  const { num1, num2 } = req.query;
  if (isNaN(num1) || isNaN(num2)) return res.status(400).send('Invalid numbers');
  res.send({ result: Number(num1) - Number(num2) });
});

app.get('/multiply', (req, res) => {
  const { num1, num2 } = req.query;
  if (isNaN(num1) || isNaN(num2)) return res.status(400).send('Invalid numbers');
  res.send({ result: Number(num1) * Number(num2) });
});

app.get('/divide', (req, res) => {
  const { num1, num2 } = req.query;
  if (isNaN(num1) || isNaN(num2)) return res.status(400).send('Invalid numbers');
  if (Number(num2) === 0) return res.status(400).send('Cannot divide by zero');
  res.send({ result: Number(num1) / Number(num2) });
});

app.listen(port, () => {
  console.log(`Calculator microservice running at http://localhost:${port}`);
});